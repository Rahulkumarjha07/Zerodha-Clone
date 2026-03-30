import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { DoughnutChart } from "./DoughnoutChart";

const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [search, setSearch] = useState("");

  // ✅ MARKET STATUS
  const isMarketOpen = () => {
    const now = new Date();
    const day = now.getDay();

    const time = now.getHours() * 60 + now.getMinutes();
    const start = 9 * 60 + 15;
    const end = 15 * 60 + 30;

    if (day === 0 || day === 6) return false;
    if (time < start || time > end) return false;

    return true;
  };

  // ✅ FETCH DATA
  useEffect(() => {
    const fetchData = () => {
      axios
        .get("http://localhost:8080/api/stocks")
        .then((res) => {
          let formatted = res.data.stocks.map((s) => ({
            name: s.symbol.replace(".NS", ""),
            price: s.regularMarketPrice,
            percent: s.regularMarketChangePercent.toFixed(2) + "%",
            isDown: s.regularMarketChangePercent < 0,
          }));

          // 🔥 Fake movement when market closed
          if (!isMarketOpen()) {
            formatted = formatted.map((stock) => ({
              ...stock,
              price: Number(
                (stock.price + (Math.random() * 10 - 5)).toFixed(2)
              ),
            }));
          }

          setWatchlist(formatted);
        })
        .catch((err) => console.error(err));
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  // ✅ SEARCH FILTER
  const filteredStocks = watchlist.filter((stock) =>
    stock.name.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ CHART DATA
  const data = {
    labels: filteredStocks.map((s) => s.name),
    datasets: [
      {
        label: "Price",
        data: filteredStocks.map((s) => s.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
        ],
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search eg: infy, tcs, reliance"
          className="Find"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <span className="counts">
          {filteredStocks.length} / {watchlist.length}
        </span>
      </div>

      {/* MARKET STATUS */}
      <p className={isMarketOpen() ? "open" : "closed"}>
        {isMarketOpen() ? "🟢 Market Open" : "🔴 Market Closed"}
      </p>

      <ul className="list">
        {filteredStocks.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>

      {/* NO RESULT */}
      {filteredStocks.length === 0 && (
        <p style={{ textAlign: "center" }}>No stocks found</p>
      )}

      {filteredStocks.length > 0 && <DoughnutChart data={data} />}
    </div>
  );
};

export default WatchList;

// ================= ITEM =================

const WatchListItem = ({ stock }) => {
  const [show, setShow] = useState(false);

  return (
    <li onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>

        <div className="itemInfo">
          <span>{stock.percent}</span>

          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}

          <span>₹{stock.price}</span>
        </div>
      </div>

      {show && <WatchListActions uid={stock.name} />}
    </li>
  );
};

// ================= ACTIONS =================

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  return (
    <span className="actions">
      <Tooltip title="Buy" arrow TransitionComponent={Grow}>
        <button
          className="buy"
          onClick={() => generalContext.openBuyWindow(uid)}
        >
          Buy
        </button>
      </Tooltip>

      <Tooltip title="Sell" arrow TransitionComponent={Grow}>
        <button className="sell">Sell</button>
      </Tooltip>

      <Tooltip title="Analytics" arrow TransitionComponent={Grow}>
        <button className="action">
          <BarChartOutlined />
        </button>
      </Tooltip>

      <Tooltip title="More" arrow TransitionComponent={Grow}>
        <button className="action">
          <MoreHoriz />
        </button>
      </Tooltip>
    </span>
  );
};