import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Funds = () => {
  const [balance, setBalance] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [actionType, setActionType] = useState("");

  const fetchFunds = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("User not logged in");
        setLoading(false);
        return;
      }

      const res = await axios.get("http://localhost:8080/funds", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setBalance(res.data.balance || 0);
      setError("");
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to load funds");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFunds();

    window.addEventListener("fundsUpdated", fetchFunds);

    const openModal = () => {
      setActionType("add");
      setShowModal(true);
    };

    window.addEventListener("openFundsModal", openModal);

    return () => {
      window.removeEventListener("fundsUpdated", fetchFunds);
      window.removeEventListener("openFundsModal", openModal);
    };
  }, []);

  const handleConfirm = async () => {
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      toast.warning("Enter valid amount ❌");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        `http://localhost:8080/funds/${actionType}`,
        { amount: Number(amount) },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success(
        actionType === "add"
          ? "Funds added successfully ✅"
          : "Withdraw successful ✅"
      );

      setShowModal(false);
      setAmount("");
      fetchFunds();
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Operation failed ❌");
    }
  };

  if (loading) return <p className="loading">Loading funds...</p>;

  return (
    <div className="funds-page">
      {error && <p className="error">{error}</p>}

      {/* 🔥 HEADER */}
      <div className="funds-header">
        <div>
          <h2>Funds</h2>
          <p>Instant, zero-cost fund transfers with UPI</p>
        </div>

        <div className="funds-actions">
          <button
            className="btn add"
            onClick={() => {
              setActionType("add");
              setShowModal(true);
            }}
          >
            + Add Funds
          </button>

          <button
            className="btn withdraw"
            onClick={() => {
              setActionType("withdraw");
              setShowModal(true);
            }}
          >
            Withdraw
          </button>
        </div>
      </div>

      {/* 💰 BALANCE CARD */}
      <div className="fund-card">
        <p>Available Balance</p>
        <h1>₹{balance.toFixed(2)}</h1>
      </div>

      {/* 🔥 MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>
              {actionType === "add"
                ? "Add Funds 💰"
                : "Withdraw Funds 💸"}
            </h3>

            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <div className="modal-buttons">
              <button className="confirm" onClick={handleConfirm}>
                Confirm
              </button>

              <button
                className="cancel"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Funds;