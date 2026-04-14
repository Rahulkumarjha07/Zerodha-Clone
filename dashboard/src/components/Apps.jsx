import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FiLogOut } from "react-icons/fi";
import "./modal.css";

const Apps = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully 👋");
    navigate("/login");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        
        <div className="icon">
          <FiLogOut />
        </div>

        <p>Are you sure you want to logout?</p>

        <div className="modal-buttons">
          <button className="confirm" onClick={handleLogout}>
            Logout
          </button>

          {/* 🔥 FIXED HERE */}
          <button className="cancel" onClick={() => navigate(-1)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Apps;