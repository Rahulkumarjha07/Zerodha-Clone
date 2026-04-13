import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Apps = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 🔥 remove token
    localStorage.removeItem("token");

    // 🔔 toast
    toast.success("Logged out successfully 👋");

    // 🔁 redirect to frontend login
    window.location.href = "http://localhost:3000/login";
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>Logout 🚪</h3>
        <p>Are you sure you want to logout?</p>

        <div className="modal-buttons">
          <button className="confirm" onClick={handleLogout}>
            Logout
          </button>

          <button className="cancel" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Apps;