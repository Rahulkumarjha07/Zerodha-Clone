import React, { useEffect, useState } from "react";
import axios from "axios";

const Summary = () => {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
  const fetchHoldings = async () => {
    try {
      const token = localStorage.getItem("token");

      console.log("TOKEN:", token); // 🔍 debug

      if (!token) {
        console.log("❌ No token found");
        return;
      }

      const res = await axios.get("http://localhost:8080/holdings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("✅ Summary Data:", res.data); // 🔍 debug

      setHoldings(res.data);

    } catch (err) {
      console.error("❌ Error fetching summary:", err);
    }
  };

  fetchHoldings();
}, []);

  // ✅ CALCULATIONS
  let totalInvestment = 0;
  let currentValue = 0;

  holdings.forEach((stock) => {
    const qty = Number(stock.qty) || 0;
    const avg = Number(stock.avg) || 0;
    const price = Number(stock.price) || 0;

    totalInvestment += qty * avg;
    currentValue += qty * price;
  });

  const pnl = currentValue - totalInvestment;
  const pnlPercent =
    totalInvestment > 0 ? (pnl / totalInvestment) * 100 : 0;

  const profitClass = pnl >= 0 ? "profit" : "loss";

  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      {/* EQUITY SECTION */}
      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>{(currentValue / 1000).toFixed(2)}k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>
            </p>
            <p>
              Opening balance{" "}
              <span>{(totalInvestment / 1000).toFixed(2)}k</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>

      {/* HOLDINGS SECTION */}
      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={profitClass}>
              {(pnl / 1000).toFixed(2)}k{" "}
              <small>{pnlPercent.toFixed(2)}%</small>
            </h3>
            <p>P&L</p>
          </div>

          <hr />

          <div className="second">
            <p>
              Current Value{" "}
              <span>{(currentValue / 1000).toFixed(2)}k</span>
            </p>
            <p>
              Investment{" "}
              <span>{(totalInvestment / 1000).toFixed(2)}k</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;