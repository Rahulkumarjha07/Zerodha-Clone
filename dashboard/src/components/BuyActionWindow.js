import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { GeneralContext } from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, type = "BUY", price = 0 }) => {

  // 🔥 MARKET TIME CHECK
  const isMarketOpen = () => {
    const now = new Date();
    const day = now.getDay();

    const minutes = now.getHours() * 60 + now.getMinutes();
    const start = 9 * 60 + 15;
    const end = 15 * 60 + 30;

    if (day === 0 || day === 6) return false;
    if (minutes < start || minutes > end) return false;

    return true;
  };

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(price);
  const [balance, setBalance] = useState(0);

  const generalContext = useContext(GeneralContext);
  const navigate = useNavigate();

  // 🔥 Auto-fill price
  useEffect(() => {
    setStockPrice(price);
  }, [price]);

  // ✅ Fetch balance (NO MARKET CHECK HERE)
  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:8080/funds", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setBalance(res.data.balance);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBalance();
  }, []);

  const total = Number(stockQuantity) * Number(stockPrice);
  const shortage = total - balance;

  const handleOrder = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first ❌");
      return;
    }

    if (stockQuantity <= 0 || stockPrice <= 0) {
      toast.warning("Enter valid quantity and price ❌");
      return;
    }

    // 🔥 CORRECT PLACE FOR MARKET CHECK
    if (!isMarketOpen()) {
      toast.error("Market is closed ❌ Order cannot be placed");
      return;
    }

    // 🔥 INSUFFICIENT FUNDS
    if (type === "BUY" && total > balance) {
      toast.error(
        `❌ Insufficient balance. You need ₹${shortage.toFixed(2)} more`
      );
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:8080/order",
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: type,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(res.data.message || "Order placed ✅");

      generalContext.closeOrderWindow();

      window.dispatchEvent(new Event("positionsUpdated"));
      window.dispatchEvent(new Event("holdingsUpdated"));
      window.dispatchEvent(new Event("ordersUpdated"));
      window.dispatchEvent(new Event("fundsUpdated"));

    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Order failed ❌");
    }
  };

  const handleAddFunds = () => {
    generalContext.closeOrderWindow();

    navigate("/funds");

    setTimeout(() => {
      window.dispatchEvent(new Event("openFundsModal"));
    }, 300);
  };

  const handleCancel = () => {
    generalContext.closeOrderWindow();
  };

  return (
    <div className="container" id="buy-window">

      <h3 style={{ textAlign: "center" }}>
        {type === "BUY" ? "🟢 Buy Stock" : "🔴 Sell Stock"}
      </h3>

      {/* 💰 Balance */}
      <p style={{ textAlign: "center", fontWeight: "bold" }}>
        Balance: ₹{balance}
      </p>

      {/* 🔥 SHORTAGE MESSAGE */}
      {type === "BUY" && total > balance && (
        <p style={{ color: "red", textAlign: "center" }}>
          Need ₹{shortage.toFixed(2)} more
        </p>
      )}

      <div className="inputs">
        <fieldset>
          <legend>Qty</legend>
          <input
            type="number"
            min="1"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend>Price</legend>
          <input
            type="number"
            step="0.05"
            value={stockPrice}
            onChange={(e) => setStockPrice(e.target.value)}
          />
        </fieldset>
      </div>

      <div className="buttons">
        <span>Total ₹{total.toFixed(2)}</span>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>

          <button
            className={type === "BUY" ? "btn btn-blue" : "btn btn-red"}
            onClick={handleOrder}
            disabled={type === "BUY" && total > balance}
          >
            {type}
          </button>

          {type === "BUY" && total > balance && (
            <button className="btn btn-green" onClick={handleAddFunds}>
              Add Funds 💰
            </button>
          )}

          <button className="btn btn-grey" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;