import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("User not logged in");
        setLoading(false);
        return;
      }

      const res = await axios.get("https://zerodha-clone-93hl.onrender.com/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          t: Date.now(),
        },
      });

      setOrders(res.data);
      setLoading(false);
      setError("");
    } catch (err) {
      console.error("Error fetching orders:", err);
      setError("Failed to load orders");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();

    const interval = setInterval(() => {
      if (document.visibilityState === "visible") {
        fetchOrders();
      }
    }, 5000);

    const refresh = () => fetchOrders();
    window.addEventListener("ordersUpdated", refresh);

    return () => {
      clearInterval(interval);
      window.removeEventListener("ordersUpdated", refresh);
    };
  }, []);

  return (
    <div className="orders">

      {/* ❌ ERROR */}
      {error && <p className="error">{error}</p>}

      {/* ⏳ LOADING */}
      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? (
        <div className="no-orders">
          <p>📭 No orders placed yet</p>
        </div>
      ) : (

        /* 🔥 WRAPPER ADDED FOR RESPONSIVENESS */
        <div className="orders-table-wrapper">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Stock</th>
                <th>Type</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Date & Time</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.name}</td>

                  <td>
                    <span
                      className={
                        order.mode === "BUY" ? "buy-badge" : "sell-badge"
                      }
                    >
                      {order.mode}
                    </span>
                  </td>

                  <td>{order.qty}</td>

                  <td>₹{Number(order.price).toFixed(2)}</td>

                  <td>
                    {order.createdAt
                      ? new Date(order.createdAt).toLocaleString()
                      : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;