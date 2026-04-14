export default function Team() {
  return (
    <div className="container team-section">

      {/* Heading */}
      <h1 className="text-center team-heading">People</h1>

      <div className="row align-items-center justify-content-center">

        {/* 🔥 Left Side */}
        <div className="col-lg-5 col-md-6 text-center team-left">
          <img
            src="media/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="team-img"
          />

          <h4 className="mt-4">Nithin Kamath</h4>
          <p className="text-muted">Founder, CEO</p>
        </div>

        {/* 🔥 Right Side */}
        <div className="col-lg-7 col-md-6 team-content">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>
            Playing basketball is his zen.
          </p>

          <p>
            Connect on{" "}
            <a href="#" className="link-primary">Homepage</a> /{" "}
            <a href="#" className="link-primary">TradingQnA</a> /{" "}
            <a href="#" className="link-primary">Twitter</a>
          </p>
        </div>

      </div>

    </div>
  );
}