import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-1">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="/media/logo.svg"
            alt="logo"
            style={{ width: "120px" }}
          />
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right Side Menu */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link className="nav-link active" to="/signup">Signup</Link>
            </li>

            <li className="nav-item ">
              <Link className="nav-link active" to="/about">About</Link>
            </li>

            <li className="nav-item ">
              <Link className="nav-link active" to="/product">Products</Link>
            </li>

            <li className="nav-item ">
              <Link className="nav-link active" to="/pricing">Pricing</Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link active" to="/support">Support</Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}