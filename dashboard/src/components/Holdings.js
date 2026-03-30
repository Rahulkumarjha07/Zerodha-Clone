import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);

useEffect(() => {
  const fetchHoldings = async () => {
    const token = localStorage.getItem("token");

    console.log("TOKEN:", token); // ✅ debug

    if (!token) {
      console.log("⏳ Waiting for token...");
      return;
    }

    try {
      const res = await axios.get("http://localhost:8080/holdings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("✅ Holdings:", res.data);
      setHoldings(res.data);

    } catch (err) {
      console.error("❌ Error fetching holdings:", err);
    }
  };

  // 🔥 Retry until token exists
  const interval = setInterval(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchHoldings();
      clearInterval(interval);
    }
  }, 300);

  return () => clearInterval(interval);

}, []);

  // ✅ Graph labels
  const labels = holdings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: holdings.map((stock) => Number(stock.price) || 0),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {holdings.map((stock) => {
              const price = Number(stock.price) || 0;
              const avg = Number(stock.avg) || 0;
              const qty = Number(stock.qty) || 0;
              const day = Number(stock.day) || 0;

              const currval = price * qty;
              const profit = currval - avg * qty;

              const profClass = profit >= 0 ? "profit" : "loss";
              const dayClass = day < 0 ? "loss" : "profit";

              return (
                <tr key={stock.name}>
                  <td>{stock.name}</td>
                  <td>{qty}</td>
                  <td>{avg.toFixed(2)}</td>
                  <td>{price.toFixed(2)}</td>
                  <td>{currval.toFixed(2)}</td>
                  <td className={profClass}>
                    {profit.toFixed(2)}
                  </td>
                  <td className={profClass}>
                    {(Number(stock.net) || 0).toFixed(2)}
                  </td>
                  <td className={dayClass}>
                    {day.toFixed(2)}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ✅ Graph */}
      {holdings.length > 0 && <VerticalGraph data={data} />}
    </>
  );
};

export default Holdings;