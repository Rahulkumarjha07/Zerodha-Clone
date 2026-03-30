import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found");
        return;
      }

      const res = await axios.get("http://localhost:8080/orders", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        params: {
          t: Date.now(), // 🔥 prevent caching
        },
      });

      console.log("ORDERS:", res.data); // 🔍 debug

      setOrders(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching orders:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();

    const interval = setInterval(fetchOrders, 5000); // 🔄 auto refresh
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="orders">
      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders</p>
        </div>
      ) : (
        <table className="orders-table">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Type</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Time</th> {/* 🔥 added */}
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>

                <td
                  style={{
                    color: order.mode === "BUY" ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {order.mode}
                </td>

                <td>{order.qty}</td>

                <td>₹{order.price}</td>

                <td>
                  {new Date(order.createdAt).toLocaleTimeString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;