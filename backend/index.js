require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

const YahooFinance = require("yahoo-finance2").default;
const yahooFinance = new YahooFinance();

// ================= MIDDLEWARE =================

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://zerodha-clone-pi-lovat.vercel.app",
    "https://zerodha-clone-txsu.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};

app.use(cors(corsOptions));

// 🔥 HANDLE PREFLIGHT (VERY IMPORTANT)
app.options("*", cors(corsOptions));

app.use(bodyparser.json());

// ================= MODELS =================

const User = require("./models/UserModel");
const Order = require("./models/OrderModel");
const Holding = require("./models/HoldingModel");
const Position = require("./models/Position");
const Fund = require("./models/FundModel");

// ================= DB =================

const PORT = process.env.PORT || 8080;
const URL = process.env.MONGO_URL;

mongoose.connect(URL)
  .then(() => console.log("✅ DB connected"))
  .catch((err) => console.log("❌ DB error", err));

// ================= AUTH =================

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ msg: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secretkey");
    req.userId = decoded.id;
    next();
  } catch {
    return res.status(401).json({ msg: "Invalid token" });
  }
};


// ================= USER DETAILS =================
app.get("/user", auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("username email");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      username: user.username,
      email: user.email,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching user" });
  }
});




// ================= POSITIONS =================

app.get("/positions", auth, async (req, res) => {
  try {
    const positions = await Position.find({ userId: req.userId });

    // ✅ no positions
    if (!positions.length) {
      return res.json([]);
    }

    const symbols = positions.map(p => p.name + ".NS");

    let quotes = [];

    try {
      const data = await yahooFinance.quote(symbols);
      quotes = Array.isArray(data) ? data : [data];
    } catch (err) {
      console.error("❌ Yahoo API error:", err.message);
    }

    const quoteMap = {};

    quotes.forEach(q => {
      if (q && q.symbol) {
        quoteMap[q.symbol.replace(".NS", "")] = q;
      }
    });

    const result = positions.map(p => {
      const stock = quoteMap[p.name] || {};

      const price = stock.regularMarketPrice || 0;

      return {
        product: p.product,
        name: p.name,
        qty: p.qty,
        avg: p.avg,
        price,
        day: stock.regularMarketChangePercent || 0,
        pnl: (price - p.avg) * p.qty,
      };
    });

    res.json(result);

  } catch (err) {
    console.error("❌ POSITION ERROR:", err);
    res.status(500).json({ message: "Error fetching positions" });
  }
});



// ================= STOCKS =================

app.get("/api/stocks", async (req, res) => {
  try {
   const symbols = [
  "RELIANCE.NS","TCS.NS","INFY.NS","HDFCBANK.NS","ICICIBANK.NS",
  "HINDUNILVR.NS","ITC.NS","SBIN.NS","BHARTIARTL.NS","KOTAKBANK.NS",

  "LT.NS","AXISBANK.NS","ASIANPAINT.NS","MARUTI.NS","SUNPHARMA.NS",
  "ULTRACEMCO.NS","TITAN.NS","NESTLEIND.NS","BAJFINANCE.NS","BAJAJFINSV.NS",

  "WIPRO.NS","HCLTECH.NS","TECHM.NS","POWERGRID.NS","NTPC.NS",
  "ONGC.NS","COALINDIA.NS","TATASTEEL.NS","JSWSTEEL.NS","ADANIENT.NS",

  "ADANIPORTS.NS","GRASIM.NS","CIPLA.NS","DRREDDY.NS","EICHERMOT.NS",
  "HEROMOTOCO.NS","BRITANNIA.NS","DIVISLAB.NS","APOLLOHOSP.NS","INDUSINDBK.NS",

  "BAJAJ-AUTO.NS","HDFCLIFE.NS","SBILIFE.NS","ICICIPRULI.NS","ICICIGI.NS",
  "PIDILITIND.NS","DABUR.NS","GODREJCP.NS","MARICO.NS","COLPAL.NS",

  "M&M.NS","TATAMOTORS.NS","TVSMOTOR.NS","ASHOKLEY.NS","ESCORTS.NS",
  "BHEL.NS","BEL.NS","HAL.NS","LUPIN.NS","AUROPHARMA.NS",

  "BIOCON.NS","TORNTPHARM.NS","ZYDUSLIFE.NS","ALKEM.NS","GLAND.NS",
  "NAUKRI.NS","PAYTM.NS","ZOMATO.NS","NYKAA.NS","POLICYBZR.NS",

  "IRCTC.NS","RVNL.NS","IRFC.NS","CONCOR.NS","GAIL.NS",
  "IOC.NS","BPCL.NS","HPCL.NS","PETRONET.NS","IGL.NS",

  "SIEMENS.NS","ABB.NS","HAVELLS.NS","DIXON.NS","AMBER.NS",
  "VOLTAS.NS","BLUESTARCO.NS","CROMPTON.NS","WHIRLPOOL.NS","TTKPRESTIG.NS",

  "TATAPOWER.NS","ADANIGREEN.NS","ADANIPOWER.NS","NHPC.NS","SJVN.NS"
];

    let rawQuotes;

    try {
      rawQuotes = await yahooFinance.quote(symbols);
    } catch (err) {
      console.error("❌ Yahoo API failed:", err.message);
      return res.status(500).json({ error: "Stock API failed" });
    }

    const quotesArr = Array.isArray(rawQuotes) ? rawQuotes : [rawQuotes];

    const stocks = quotesArr
      .filter(q => q && q.symbol)
      .map(q => ({
        symbol: q.symbol,
        regularMarketPrice: q.regularMarketPrice ?? 0,
        regularMarketChangePercent: q.regularMarketChangePercent ?? 0,
      }));

    res.json({
      count: stocks.length,
      stocks,
    });

  } catch (err) {
    console.error("❌ SERVER ERROR:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ================= AUTH ROUTES =================

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "User exists" });

    const hashed = await bcrypt.hash(password, 10);

    await new User({ username, email, password: hashed }).save();

    res.json({ msg: "User created" });
  } catch {
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

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "secretkey");

    res.json({
      token,
      username: user.username, // 🔥 added
    });

  } catch {
    res.status(500).json({ msg: "Login error" });
  }
});

// ================= FUNDS =================

// 🔥 GET FUNDS (NEW - IMPORTANT)
app.get("/funds", auth, async (req, res) => {
  try {
    let fund = await Fund.findOne({ userId: req.userId });

    if (!fund) {
      fund = await new Fund({ userId: req.userId, balance: 0 }).save();
    }

    res.json({ balance: fund.balance });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching funds" });
  }
});





// ================= PLACE ORDER =================

app.post("/order", auth, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    const userId = req.userId;
    const quantity = Number(qty);
    const stockPrice = Number(price);

    // ✅ VALIDATION
    if (!name || quantity <= 0 || stockPrice <= 0) {
      return res.status(400).json({
        message: "❌ Invalid order data",
      });
    }

    const orderValue = quantity * stockPrice;

    // ================= FUNDS =================
    let fund = await Fund.findOne({ userId });

    if (!fund) {
      fund = await new Fund({ userId, balance: 0 }).save();
    }

    // ================= BUY =================
    if (mode === "BUY") {
      if (fund.balance < orderValue) {
        return res.status(400).json({
          message: "❌ Insufficient balance",
        });
      }

      fund.balance -= orderValue;
      await fund.save();
    }

    // ================= SELL =================
    if (mode === "SELL") {
      const existingHold = await Holding.findOne({ userId, name });

      if (!existingHold || existingHold.qty < quantity) {
        return res.status(400).json({
          message: "❌ Not enough stock to sell",
        });
      }

      fund.balance += orderValue;
      await fund.save();
    }

    // ================= SAVE ORDER =================
    const newOrder = new Order({
      name,
      qty: quantity,
      price: stockPrice,
      mode,
      userId,
    });

    await newOrder.save();

    // ================= HOLDINGS =================

    const existingHold = await Holding.findOne({ userId, name });

    if (mode === "BUY") {
      if (existingHold) {
        const totalQty = existingHold.qty + quantity;

        const newAvg =
          (existingHold.avg * existingHold.qty + stockPrice * quantity) /
          totalQty;

        existingHold.qty = totalQty;
        existingHold.avg = newAvg;

        await existingHold.save();
      } else {
        await new Holding({
          name,
          qty: quantity,
          avg: stockPrice,
          userId,
        }).save();
      }
    }

    if (mode === "SELL") {
      if (existingHold) {
        existingHold.qty -= quantity;

        if (existingHold.qty <= 0) {
          await Holding.deleteOne({ _id: existingHold._id });
        } else {
          await existingHold.save();
        }
      }
    }

    // ================= POSITIONS (🔥 FIX) =================

    const existingPosition = await Position.findOne({ userId, name });

    if (mode === "BUY") {
      if (existingPosition) {
        const totalQty = existingPosition.qty + quantity;

        const newAvg =
          (existingPosition.avg * existingPosition.qty +
            stockPrice * quantity) /
          totalQty;

        existingPosition.qty = totalQty;
        existingPosition.avg = newAvg;

        await existingPosition.save();
      } else {
        await new Position({
          product: "CNC",
          name,
          qty: quantity,
          avg: stockPrice,
          userId,
        }).save();
      }
    }

    if (mode === "SELL") {
      if (existingPosition) {
        existingPosition.qty -= quantity;

        if (existingPosition.qty <= 0) {
          await Position.deleteOne({ _id: existingPosition._id });
        } else {
          await existingPosition.save();
        }
      }
    }

    // ================= RESPONSE =================
    res.status(201).json({
      message: "✅ Order placed successfully",
      balance: fund.balance,
    });

  } catch (err) {
    console.error("❌ ORDER ERROR:", err);
    res.status(500).json({ message: "Order failed" });
  }
});
// ADD FUNDS
app.post("/funds/add", auth, async (req, res) => {
  try {
    const { amount } = req.body;

    let fund = await Fund.findOne({ userId: req.userId });

    if (!fund) {
      fund = new Fund({ userId: req.userId, balance: 0 });
    }

    fund.balance += Number(amount);
    await fund.save();

    res.json({ message: "Funds added", balance: fund.balance });

  } catch {
    res.status(500).json({ message: "Error adding funds" });
  }
});

// WITHDRAW
app.post("/funds/withdraw", auth, async (req, res) => {
  try {
    const { amount } = req.body;

    const fund = await Fund.findOne({ userId: req.userId });

    if (!fund || fund.balance < amount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    fund.balance -= Number(amount);
    await fund.save();

    res.json({ message: "Withdraw successful", balance: fund.balance });

  } catch {
    res.status(500).json({ message: "Withdraw error" });
  }
});

// ================= ORDERS =================

app.get("/orders", auth, async (req, res) => {
  const orders = await Order.find({ userId: req.userId }).sort({ _id: -1 });
  res.json(orders);
});

// ================= HOLDINGS =================

app.get("/holdings", auth, async (req, res) => {
  try {
    const holdings = await Holding.find({ userId: req.userId });

    // ✅ No holdings → return empty
    if (!holdings.length) {
      return res.json([]);
    }

    const symbols = holdings.map(h => h.name + ".NS");

    let quotes = [];

    try {
      const data = await yahooFinance.quote(symbols);
      quotes = Array.isArray(data) ? data : [data];
    } catch (err) {
      console.error("❌ Yahoo API error:", err.message);
    }

    const quoteMap = {};

    quotes.forEach(q => {
      if (q && q.symbol) {
        quoteMap[q.symbol.replace(".NS", "")] = q;
      }
    });

    const result = holdings.map(h => {
      const stock = quoteMap[h.name] || {};

      const price = stock.regularMarketPrice || 0;

      return {
        name: h.name,
        qty: h.qty,
        avg: h.avg,
        price,
        day: stock.regularMarketChangePercent || 0,
        net: h.avg ? ((price - h.avg) / h.avg) * 100 : 0,
      };
    });

    res.json(result);

  } catch (err) {
    console.error("❌ HOLDINGS ERROR:", err);
    res.status(500).json({ message: "Error fetching holdings" });
  }
});

// ================= ROOT =================

app.get("/", (req, res) => {
  res.send("🚀 Backend running");
});

// ================= SERVER =================

app.listen(PORT, () => {
  console.log(`🔥 Server running on ${PORT}`);
});