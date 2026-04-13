import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
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

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <Link className="nav-link px-lg-3" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-lg-3" to="/product">Products</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-lg-3" to="/pricing">Pricing</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-lg-3" to="/support">Support</Link>
            </li>

            {/* Buttons */}
            <li className="nav-item mt-3 mt-lg-0">
              <Link className="btn btn-outline-primary w-100 w-lg-auto me-lg-2" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item mt-2 mt-lg-0">
              <Link className="btn btn-primary w-100 w-lg-auto" to="/signup">
                Signup
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}