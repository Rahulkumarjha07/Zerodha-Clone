import React, { useEffect, useState } from "react";
import axios from "axios";

const Positions = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/positions", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
      })
      .then((res) => {
        setPositions(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching positions:", err);
        setLoading(false);
      });
  }, []);

  // ✅ Loading state
  if (loading) {
    return <p>Loading positions...</p>;
  }

  // ✅ Empty state
  if (!positions.length) {
    return <p>No positions found</p>;
  }

  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {positions.map((stock) => {
              // ✅ Safe numeric conversion
              const price = Number(stock.price) || 0;
              const avg = Number(stock.avg) || 0;
              const qty = Number(stock.qty) || 0;
              const day = Number(stock.day) || 0;

              // ✅ Calculations
              const curValue = price * qty;
              const profit = curValue - avg * qty;

              // ✅ Classes
              const profClass = profit >= 0 ? "profit" : "loss";
              const dayClass = day < 0 ? "loss" : "profit";

              return (
                <tr key={stock._id || stock.name}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{qty}</td>
                  <td>{avg.toFixed(2)}</td>
                  <td>{price.toFixed(2)}</td>
                  <td className={profClass}>
                    {profit.toFixed(2)}
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
    </>
  );
};

export default Positions;