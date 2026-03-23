export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-1">

        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img
            src="/media/logo.svg"
            alt="logo"
            style={{ width: "120px" }}
          />
        </a>

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
              <a className="nav-link active" href="#">Signup</a>
            </li>

            <li className="nav-item ">
              <a className="nav-link active" href="#">About</a>
            </li>

            <li className="nav-item ">
              <a className="nav-link active" href="#">Products</a>
            </li>

            <li className="nav-item ">
              <a className="nav-link active" href="#">Pricing</a>
            </li>

            <li className="nav-item active">
              <a className="nav-link active" href="#">Support</a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}