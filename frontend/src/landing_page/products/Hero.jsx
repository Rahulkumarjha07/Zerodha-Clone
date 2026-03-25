import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col text-center">

          <h2 className="mt-4">Zerodha Products</h2>

          <p className="mt-3 mb-4 fs-5 text-muted">
            Sleek, modern, and intuitive trading platforms
          </p>

          <p>
            Check out our{" "}
            <Link
              to="/products"
              className="text-primary text-decoration-none fw-medium"
            >
              investment offerings
              <i className="fa-solid fa-right-long ms-2"></i>
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}