import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm sticky-top">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
          Trade<span style={{ color: "#387ed1" }}>X</span>
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          {/* ✅ CENTER LINKS */}
          <ul className="navbar-nav mx-auto gap-lg-4 text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>
          </ul>

          {/* ✅ RIGHT BUTTONS */}
          <div className="d-flex gap-2 mt-3 mt-lg-0">
            <Link className="btn btn-outline-primary px-4" to="/login">
              Login
            </Link>

            <Link className="btn btn-primary px-4" to="/signup">
              Signup
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}