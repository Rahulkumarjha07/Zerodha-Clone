import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  // ✅ FIX: useContext properly
  const generalContext = useContext(GeneralContext);

  // 🔥 BUY FUNCTION (FIXED)
  const handleBuyClick = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        return;
      }

      const res = await axios.post(
        "http://localhost:8080/order",
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: "BUY",
        },
        {
          headers: {
           Authorization: `Bearer ${localStorage.getItem("token")}`
          },
        }
      );

      console.log("✅ Order placed:", res.data);

      // 🔥 close window
      generalContext.closeBuyWindow();

    } catch (err) {
      console.error("❌ BUY ERROR:", err.response?.data || err.message);
      alert("Order failed");
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              min="1"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>

        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>

          <Link className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;