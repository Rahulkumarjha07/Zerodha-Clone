import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">

        <h1 className="mt-2 fs-2">404 - Page Not Found</h1>

        <p className="text-muted">
          The page you are looking for does not exist.
        </p>

        {/* Button to go back home */}
        <div className="mt-3">
          <Link to="/">
            <Button variant="contained">Go to Home</Button>
          </Link>
        </div>

      </div>
    </div>
  );
}