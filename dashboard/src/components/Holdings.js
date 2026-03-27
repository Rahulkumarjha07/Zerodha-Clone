import React from "react";
import { holdings } from "../data/data.js";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  

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
            {holdings.map((stock, index) => {
              const currval = stock.price * stock.qty;
              const profit = currval - stock.avg * stock.qty;

              const profclass = profit >= 0 ? "profit" : "loss";
              const dayClass = stock.day.includes("-") ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currval.toFixed(2)}</td>
                  <td className={profclass}>{profit.toFixed(2)}</td>
                  <td className={profclass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Static Summary */}
      <div className="row">
        <div className="col">
          <h5>5000.00</h5>
          <p>Total Investment</p>
        </div>

        <div className="col">
          <h5>6000.00</h5>
          <p>Current Value</p>
        </div>

        <div className="col">
          <h5 className="profit">1000.00 (20.00%)</h5>
          <p>P&amp;L</p>
        </div>
      </div>

      
    </>
  );
};

export default Holdings;