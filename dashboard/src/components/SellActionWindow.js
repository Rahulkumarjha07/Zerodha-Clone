import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    try {
      await axios.post("http://localhost:8080/order", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });

      closeBuyWindow();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container" id="buy-window">
      <div className="inputs">
        <input
          type="number"
          value={stockQuantity}
          onChange={(e) => setStockQuantity(e.target.value)}
        />
        <input
          type="number"
          value={stockPrice}
          onChange={(e) => setStockPrice(e.target.value)}
        />
      </div>

      <div className="buttons">
        <button onClick={handleBuyClick}>Buy</button>
        <button onClick={closeBuyWindow}>Cancel</button>
      </div>
    </div>
  );
};

export default BuyActionWindow;