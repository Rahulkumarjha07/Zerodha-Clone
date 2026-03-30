require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

const YahooFinance = require("yahoo-finance2").default;
const yahooFinance = new YahooFinance(); // ✅ create ONCE

// ✅ MIDDLEWARE — allow Authorization header from both ports
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(bodyparser.json());

// ✅ MODELS
const User = require("./models/UserModel");
const Order = require("./models/OrderModel");
const Holding = require("./models/HoldingModel");
const Position = require("./models/Position");

// ✅ PORT + DB
const PORT = process.env.PORT || 8080;
const URL = process.env.MONGO_URL;

// ✅ DB CONNECTION
mongoose
  .connect(URL)
  .then(() => console.log("✅ DB is connected"))
  .catch((err) => console.log("❌ DB connection failed", err));

// ✅ AUTH MIDDLEWARE
const auth = (req, res, next) => {
  console.log("AUTH HEADER:", req.headers.authorization);

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    console.log("❌ No header");
    return res.status(401).json({ msg: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "secretkey");
    req.userId = decoded.id;
    next();
  } catch (err) {
    console.log("❌ JWT ERROR:", err.message);
    return res.status(401).json({ msg: "Invalid token" });
  }
};

// ================= AUTH =================

app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ msg: "Invalid email format" });
    }
    if (password.length < 6) {
      return res.status(400).json({ msg: "Password must be at least 6 chars" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashed });
    await user.save();

    res.json({ msg: "User created" });
  } catch (err) {
    res.status(500).json({ msg: "Signup error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ msg: "Wrong password" });

    const token = jwt.sign({ id: user._id }, "secretkey");
    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: "Login error" });
  }
});

// ================= ORDERS =================

app.get("/orders",auth, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.userId }).sort({ _id: -1 });
    res.set("Cache-Control", "no-store");
    res.status(200).json(orders);
  } catch (err) {
    console.error("Order fetch error:", err);
    res.status(500).send("Error fetching orders");
  }
});

app.post("/order", auth, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    const newOrder = new Order({ name, qty, price, mode, userId: req.userId });
    await newOrder.save();

    if (mode === "BUY") {
      // ✅ UPDATE POSITION
      const existingPos = await Position.findOne({ userId: req.userId, name });
      if (existingPos) {
        const totalQty = existingPos.qty + qty;
        const newAvg = (existingPos.avg * existingPos.qty + price * qty) / totalQty;
        existingPos.qty = totalQty;
        existingPos.avg = newAvg;
        await existingPos.save();
      } else {
        await new Position({ product: "CNC", name, qty, avg: price, userId: req.userId }).save();
      }

      // ✅ UPDATE HOLDING
      const existingHold = await Holding.findOne({ userId: req.userId, name });
      if (existingHold) {
        const totalQty = existingHold.qty + qty;
        const newAvg = (existingHold.avg * existingHold.qty + price * qty) / totalQty;
        existingHold.qty = totalQty;
        existingHold.avg = newAvg;
        await existingHold.save();
      } else {
        await new Holding({ name, qty, avg: price, userId: req.userId }).save();
      }
    }

    res.status(201).json({ message: "Order placed", order: newOrder });
  } catch (err) {
    console.error("ORDER ERROR:", err);
    res.status(500).json({ message: "Error placing order" });
  }
});

// ================= DATA =================

app.get("/holdings", auth, async (req, res) => {
  try {
    const holdings = await Holding.find({});

    const symbols = holdings
      .map(h => h.name)
      .filter(name => name)
      .map(name => name.includes(".NS") ? name : name + ".NS");

    if (symbols.length === 0) return res.json([]);

    let rawQuotes = [];

    try {
      rawQuotes = await yahooFinance.quote(symbols);
    } catch (err) {
      console.error("❌ Yahoo failed:", err.message);
    }

    const quotes = Array.isArray(rawQuotes) ? rawQuotes : [rawQuotes];

    const quoteMap = {};
    quotes.forEach(q => {
      if (q && q.symbol) {
        quoteMap[q.symbol.replace(".NS", "")] = q;
      }
    });

    const merged = holdings.map(h => {
      const stock = quoteMap[h.name];

      const price = Number(stock?.regularMarketPrice ?? 0);
      const avg = Number(h.avg) || 0;

      return {
        name: h.name,
        qty: h.qty,
        avg,
        price,
        day: Number(stock?.regularMarketChangePercent ?? 0),
        net: avg > 0 ? ((price - avg) / avg) * 100 : 0,
      };
    });

    console.log("✅ Holdings fetched:", merged.length);

    res.json(merged);

  } catch (err) {
    console.error("❌ Holdings Error:", err.message);
    res.status(500).send("Error fetching holdings");
  }
});



app.get("/positions", async (req, res) => {
  try {
    const positions = await Position.find({});

    if (!positions.length) return res.json([]);

    // ✅ FIX SYMBOL FORMAT
    const symbols = positions
      .map(p => p.name)
      .filter(name => name)
      .map(name => name.includes(".NS") ? name : name + ".NS");

    let rawQuotes = [];

    try {
      rawQuotes = await yahooFinance.quote(symbols);
    } catch (err) {
      console.error("❌ Yahoo failed:", err.message);
    }

    const quotes = Array.isArray(rawQuotes) ? rawQuotes : [rawQuotes];

    // ✅ FIX MAPPING
    const quoteMap = {};
    quotes.forEach(q => {
      if (q && q.symbol) {
        quoteMap[q.symbol.replace(".NS", "")] = q;
      }
    });

    // ✅ MERGE DATA
    const merged = positions.map(pos => {
      const stock = quoteMap[pos.name];

      const price = Number(stock?.regularMarketPrice ?? 0);
      const avg = Number(pos.avg) || 0;
      const qty = Number(pos.qty) || 0;

      return {
        product: pos.product,
        name: pos.name,
        qty,
        avg,
        price,

        // ✅ day %
        day: Number(stock?.regularMarketChangePercent ?? 0),

        // ✅ profit/loss
        pnl: (price - avg) * qty,

        // ✅ pnl %
        pnlPercent: avg > 0 ? ((price - avg) / avg) * 100 : 0,
      };
    });

    console.log("✅ Positions fetched:", merged.length);

    res.json(merged);

  } catch (err) {
    console.error("❌ Positions Error:", err.message);
    res.status(500).json({ error: "Error fetching positions" });
  }
});


app.get("/api/stocks", async (req, res) => {
  try {
    

    // ✅ Reduce symbols (IMPORTANT — avoid API failure)
   const symbols = [
      "RELIANCE.NS","TCS.NS","INFY.NS","HDFCBANK.NS","ICICIBANK.NS",
      "HINDUNILVR.NS","ITC.NS","SBIN.NS","BHARTIARTL.NS","KOTAKBANK.NS",
      "LT.NS","HCLTECH.NS","ASIANPAINT.NS","AXISBANK.NS","BAJFINANCE.NS",
      "BAJAJFINSV.NS","MARUTI.NS","SUNPHARMA.NS","TITAN.NS","ULTRACEMCO.NS",
      "WIPRO.NS","ONGC.NS","NTPC.NS","POWERGRID.NS","NESTLEIND.NS",
      "ADANIENT.NS","ADANIPORTS.NS","COALINDIA.NS","JSWSTEEL.NS","TATASTEEL.NS",
      "GRASIM.NS","DRREDDY.NS","CIPLA.NS","EICHERMOT.NS","HEROMOTOCO.NS",
      "BPCL.NS","BRITANNIA.NS","DIVISLAB.NS","INDUSINDBK.NS","TECHM.NS",
      "APOLLOHOSP.NS","HDFCLIFE.NS","SBILIFE.NS","UPL.NS","BAJAJ-AUTO.NS",
      "SHREECEM.NS","TATAMOTORS.NS","HINDALCO.NS","DABUR.NS","PIDILITIND.NS",
      "AMBUJACEM.NS","ACC.NS","BANDHANBNK.NS","BANKBARODA.NS","BEL.NS",
      "BHEL.NS","BIOCON.NS","BOSCHLTD.NS","CANBK.NS","CHOLAFIN.NS",
      "COLPAL.NS","CONCOR.NS","CUMMINSIND.NS","DLF.NS","ESCORTS.NS",
      "FEDERALBNK.NS","GAIL.NS","GLENMARK.NS","GODREJCP.NS","HAVELLS.NS",
      "ICICIPRULI.NS","IDEA.NS","IGL.NS","INDIGO.NS","IRCTC.NS",
      "JINDALSTEL.NS","LUPIN.NS","MCDOWELL-N.NS","MFSL.NS","MUTHOOTFIN.NS",
      "NAUKRI.NS","NMDC.NS","OBEROIRLTY.NS","PEL.NS","PETRONET.NS",
      "PNB.NS","RAMCOCEM.NS","SAIL.NS","SRF.NS","TORNTPHARM.NS",
      "TVSMOTOR.NS","VEDL.NS","VOLTAS.NS","ZEEL.NS","ZYDUSLIFE.NS"
    ];

    let rawQuotes;

    try {
      rawQuotes = await yahooFinance.quote(symbols);
    } catch (err) {
      console.error("❌ Yahoo API failed:", err.message);
      return res.status(500).json({ error: "Stock API failed" });
    }

    // ✅ ALWAYS normalize to array
    const quotesArr = Array.isArray(rawQuotes) ? rawQuotes : [rawQuotes];

    // ✅ Filter valid data only
    const stocks = quotesArr
      .filter((q) => q && q.symbol)
      .map((q) => ({
        symbol: q.symbol,
        regularMarketPrice: q.regularMarketPrice ?? 0,
        regularMarketChangePercent: q.regularMarketChangePercent ?? 0,
      }));

    console.log("✅ Stocks fetched:", stocks.length);

    res.json({
      count: stocks.length,
      stocks,
    });
  } catch (err) {
    console.error("❌ SERVER ERROR:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ================= ROOT =================

app.get("/", (req, res) => {
  res.send("🚀 Backend is running");
});

// ================= SERVER =================

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});