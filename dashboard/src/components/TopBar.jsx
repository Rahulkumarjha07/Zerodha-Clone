import Menu from "./Menu";

export default function TopBar() {

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "http://localhost:3000/login";
  };

  return (
    <div className="topbar">

      {/* LEFT SIDE */}
      <div className="topbar-left">
        <div className="index-box">
          <span>NIFTY 50</span>
          <span className="red">100.2</span>
        </div>

        <div className="index-box">
          <span>SENSEX</span>
          <span className="red">100.2</span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="topbar-right">
        <Menu />

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

    </div>
  );
}