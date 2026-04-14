import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Universe() {
  const navigate = useNavigate();

  return (
    <div className="container universe-section">

      {/* 🔥 TOP TEXT */}
      <div className="row">
        <h1 className="universe-top-text text-center">
          Want to know more about our technology stack? Check out the{" "}
          <a
            href="https://zerodha.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="link-primary fw-medium"
          >
            Zerodha.tech
          </a>{" "}
          blog.
        </h1>
      </div>

      {/* 🔥 TITLE */}
      <div className="row text-center universe-heading">
        <h4>The Zerodha Universe</h4>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      {/* 🔥 GRID */}
      <div className="row text-center">

        <div className="col-lg-4 col-md-6 universe-card">
          <img src="media/zerodhaFundhouse.png" alt="" />
          <p>Our asset management venture creating transparent index funds.</p>
        </div>

        <div className="col-lg-4 col-md-6 universe-card">
          <img src="media/sensibullLogo.svg" alt="" />
          <p>Options trading platform to build strategies.</p>
        </div>

        <div className="col-lg-4 col-md-6 universe-card">
          <img src="media/tijori.svg" alt="" />
          <p>Investment research platform with insights.</p>
        </div>

        <div className="col-lg-4 col-md-6 universe-card">
          <img src="media/streakLogo.png" alt="" />
          <p>Create and backtest strategies without coding.</p>
        </div>

        <div className="col-lg-4 col-md-6 universe-card">
          <img src="media/smallcaseLogo.png" alt="" />
          <p>Invest in diversified baskets of stocks or ETFs.</p>
        </div>

        <div className="col-lg-4 col-md-6 universe-card">
          <img src="media/dittoLogo.png" alt="" />
          <p>Personalized advice on insurance. No spam.</p>
        </div>

      </div>

      {/* 🔥 BUTTON */}
      <div className="text-center universe-btn">
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/signup")}
          className="signup-btn"
        >
          Sign Up for free
        </Button>
      </div>

    </div>
  );
}