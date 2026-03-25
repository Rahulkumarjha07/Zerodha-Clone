import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Universe() {

  const navigate = useNavigate();

  return (
    <div className="container py-5 p-5">

      {/* TOP TEXT */}
      <div className="row">
        <h1 className="fs-4 mb-5 fw-normal text-muted text-center">
          Want to know more about our technology stack? Check out the{" "}
          <a
            href="https://zerodha.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-decoration-none fw-medium"
          >
            Zerodha.tech
          </a>{" "}
          blog.
        </h1>
      </div>

      {/* TITLE */}
      <div className="row text-center mb-5">
        <h4>The Zerodha Universe</h4>
        <p className="fs-5 text-muted mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      {/* GRID */}
      <div className="row text-center p-5">

        {/* ITEMS (same as yours, unchanged) */}
        <div className="col-lg-4 mb-5">
          <img src="media/zerodhaFundhouse.png" alt="" className="mb-3" style={{ height: "50px" }} />
          <p className="text-muted">
            Our asset management venture that is creating simple and transparent index funds.
          </p>
        </div>

        <div className="col-lg-4 mb-5">
          <img src="media/sensibullLogo.svg" alt="" className="mb-3" style={{ height: "40px" }} />
          <p className="text-muted">
            Options trading platform that lets you create strategies.
          </p>
        </div>

        <div className="col-lg-4 mb-5">
          <img src="media/tijori.svg" alt="" className="mb-3" style={{ height: "40px" }} />
          <p className="text-muted">
            Investment research platform with detailed insights.
          </p>
        </div>

        <div className="col-lg-4 mb-5">
          <img src="media/streakLogo.png" alt="" className="mb-3" style={{ height: "50px" }} />
          <p className="text-muted">
            Create and backtest strategies without coding.
          </p>
        </div>

        <div className="col-lg-4 mb-5">
          <img src="media/smallcaseLogo.png" alt="" className="mb-3" style={{ height: "50px" }} />
          <p className="text-muted">
            Invest in diversified baskets of stocks or ETFs.
          </p>
        </div>

        <div className="col-lg-4 ">
          <img src="media/dittoLogo.png" alt="" className="mb-3" style={{ height: "50px" }} />
          <p className="text-muted">
            Personalized advice on insurance. No spam.
          </p>
        </div>

      </div>

      {/* BUTTON (OUTSIDE GRID) */}
      <div className="text-center">
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/signup")}
          style={{ backgroundColor: "#387ed1", textTransform: "none" }}
        >
          Sign Up for free
        </Button>
      </div>

    </div>
  );
}