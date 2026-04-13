import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [email, setEmail] = useState(""); // ✅ NEW

  // 🔥 FETCH USER EMAIL
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) return;

        const res = await axios.get("http://localhost:8080/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setEmail(res.data.email); // ✅ assuming backend returns { email }
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsMobileMenuOpen(false);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      
      {/* 🔥 LOGO + HAMBURGER */}
      <div className="menu-top">
        <img src="logo.png" className="logo" alt="app-logo" />

        <div
          className="hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </div>
      </div>

      {/* 🔥 MENUS */}
      <div className={`menus ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link to="/apps" onClick={() => handleMenuClick(6)}>
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Logout
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        {/* 🔥 PROFILE */}
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>

          <div className="user-info">
            <p className="username">USERID</p>
            <p className="email">{email}</p> {/* ✅ NEW */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;