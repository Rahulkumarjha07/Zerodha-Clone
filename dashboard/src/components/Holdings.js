import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);
  const [error, setError] = useState("");

  const fetchHoldings = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await axios.get("http://localhost:8080/holdings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setHoldings(res.data);
      setError("");
    } catch (err) {
      console.error("Error fetching holdings:", err);
      setError("Failed to load holdings");
    }
  };

  useEffect(() => {
    fetchHoldings();

    const interval = setInterval(() => {
      if (document.visibilityState === "visible") {
        fetchHoldings();
      }
    }, 5000);

    const refresh = () => fetchHoldings();
    window.addEventListener("holdingsUpdated", refresh);

    return () => {
      clearInterval(interval);
      window.removeEventListener("holdingsUpdated", refresh);
    };
  }, []);

  // ✅ CALCULATIONS
  const totalInvestment = holdings.reduce(
    (acc, stock) => acc + Number(stock.avg) * Number(stock.qty),
    0
  );

  const currentValue = holdings.reduce(
    (acc, stock) => acc + Number(stock.price) * Number(stock.qty),
    0
  );

  const totalPnL = currentValue - totalInvestment;

  const totalPnLPercent =
    totalInvestment > 0 ? (totalPnL / totalInvestment) * 100 : 0;

  const data = {
    labels: holdings.map((stock) => stock.name),
    datasets: [
      {
        label: "Stock Price",
        data: holdings.map((stock) => Number(stock.price) || 0),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      {/* 🔥 SUMMARY */}
      <div className="portfolio-summary">
        <div>
          <p>Investment</p>
          <h4>₹{totalInvestment.toFixed(2)}</h4>
        </div>

        <div>
          <p>Current Value</p>
          <h4>₹{currentValue.toFixed(2)}</h4>
        </div>

        <div>
          <p>P&L</p>
          <h4 className={totalPnL >= 0 ? "profit" : "loss"}>
            ₹{totalPnL.toFixed(2)} ({totalPnLPercent.toFixed(2)}%)
          </h4>
        </div>
      </div>

      {error && <p className="error">{error}</p>}

      {!holdings.length ? (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          📭 No holdings available
        </p>
      ) : (

        /* 🔥 WRAPPER ADDED */
        <div className="holdings-table-wrapper">
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Qty</th>
                  <th>Avg</th>
                  <th>LTP</th>
                  <th>Cur. Val</th>
                  <th>P&L</th>
                  <th>Net %</th>
                  <th>Day %</th>
                </tr>
              </thead>

              <tbody>
                {holdings.map((stock) => {
                  const price = Number(stock.price) || 0;
                  const avg = Number(stock.avg) || 0;
                  const qty = Number(stock.qty) || 0;
                  const day = Number(stock.day) || 0;

                  const currval = price * qty;
                  const investment = avg * qty;
                  const profit = currval - investment;

                  const netPercent =
                    investment > 0 ? (profit / investment) * 100 : 0;

                  return (
                    <tr key={stock.name}>
                      <td>{stock.name}</td>
                      <td>{qty}</td>
                      <td>₹{avg.toFixed(2)}</td>

                      <td className={day >= 0 ? "profit" : "loss"}>
                        ₹{price.toFixed(2)}
                      </td>

                      <td>₹{currval.toFixed(2)}</td>

                      <td className={profit >= 0 ? "profit" : "loss"}>
                        ₹{profit.toFixed(2)}
                      </td>

                      <td className={profit >= 0 ? "profit" : "loss"}>
                        {netPercent.toFixed(2)}%
                      </td>

                      <td className={day >= 0 ? "profit" : "loss"}>
                        {day.toFixed(2)}%
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 🔥 GRAPH WRAPPER */}
      {holdings.length > 0 && (
        <div className="graph-container">
          <VerticalGraph data={data} />
        </div>
      )}
    </>
  );
};

export default Holdings;