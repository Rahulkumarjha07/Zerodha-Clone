import React, { useEffect, useState } from "react";
import axios from "axios";

const Positions = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPositions = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("User not logged in");
        setLoading(false);
        return;
      }

      const res = await axios.get("http://localhost:8080/positions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPositions(res.data);
      setLoading(false);
      setError("");
    } catch (err) {
      console.error("Error fetching positions:", err);
      setError("Failed to load positions");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPositions();

    const interval = setInterval(() => {
      if (document.visibilityState === "visible") {
        fetchPositions();
      }
    }, 5000);

    const refresh = () => fetchPositions();
    window.addEventListener("positionsUpdated", refresh);

    return () => {
      clearInterval(interval);
      window.removeEventListener("positionsUpdated", refresh);
    };
  }, []);

  // ✅ CALCULATIONS
  const totalPnL = positions.reduce(
    (acc, stock) =>
      acc + ((Number(stock.price) - Number(stock.avg)) * Number(stock.qty)),
    0
  );

  const totalInvestment = positions.reduce(
    (acc, stock) => acc + Number(stock.avg) * Number(stock.qty),
    0
  );

  const totalPnLPercent =
    totalInvestment > 0 ? (totalPnL / totalInvestment) * 100 : 0;

  if (loading) return <p>Loading positions...</p>;

  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      {/* 🔥 SUMMARY */}
      <div className="portfolio-summary">
        <div>
          <p>Total Investment</p>
          <h4>₹{totalInvestment.toFixed(2)}</h4>
        </div>

        <div>
          <p>Total P&L</p>
          <h4 className={totalPnL >= 0 ? "profit" : "loss"}>
            ₹{totalPnL.toFixed(2)} ({totalPnLPercent.toFixed(2)}%)
          </h4>
        </div>
      </div>

      {error && <p className="error">{error}</p>}

      {!positions.length ? (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          📭 No active positions
        </p>
      ) : (

        /* 🔥 WRAPPER ADDED */
        <div className="positions-table-wrapper">
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Instrument</th>
                  <th>Qty</th>
                  <th>Avg</th>
                  <th>LTP</th>
                  <th>P&L</th>
                  <th>Day %</th>
                </tr>
              </thead>

              <tbody>
                {positions.map((stock) => {
                  const price = Number(stock.price) || 0;
                  const avg = Number(stock.avg) || 0;
                  const qty = Number(stock.qty) || 0;
                  const day = Number(stock.day) || 0;

                  const profit = (price - avg) * qty;

                  return (
                    <tr key={stock._id || stock.name}>
                      <td>{stock.product}</td>
                      <td>{stock.name}</td>
                      <td>{qty}</td>
                      <td>₹{avg.toFixed(2)}</td>

                      <td className={day >= 0 ? "profit" : "loss"}>
                        ₹{price.toFixed(2)}
                      </td>

                      <td className={profit >= 0 ? "profit" : "loss"}>
                        ₹{profit.toFixed(2)}
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
    </>
  );
};

export default Positions;