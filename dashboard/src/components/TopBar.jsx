import Menu from "./Menu";

export default function TopBar() {

  // 🔥 LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "http://localhost:3000/login";
  };

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>

        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      {/* 🔥 RIGHT SIDE MENU */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <Menu />

        {/* 🔥 LOGOUT BUTTON */}
        <button
          onClick={handleLogout}
          style={{
            padding: "6px 12px",
            background: "#ff4d4f",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}