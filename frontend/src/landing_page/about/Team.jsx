export default function Team() {
  return (
    <div className="container py-5">

      {/* Heading */}
      <h1 className="text-center mb-5">People</h1>

      <div className="row align-items-center">

        {/* Left Side (Image + Name) */}
        <div className="col-lg-5 text-center">
          <img
            src="media/nithinKamath.jpg"
            alt="Nithin Kamath"
            style={{
              borderRadius: "50%",
              width: "250px",
              height: "250px",
              objectFit: "cover"
            }}
          />

          <h4 className="mt-4">Nithin Kamath</h4>
          <p className="text-muted">Founder, CEO</p>
        </div>

        {/* Right Side (Content) */}
        <div className="col-lg-7">
          <p className="text-muted" style={{ lineHeight: "1.9" }}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p className="text-muted" style={{ lineHeight: "1.9" }}>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p className="text-muted" style={{ lineHeight: "1.9" }}>
            Playing basketball is his zen.
          </p>

          <p className="text-muted">
            Connect on{" "}
            <a href="#" className="text-primary text-decoration-none">
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" className="text-primary text-decoration-none">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#" className="text-primary text-decoration-none">
              Twitter
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}