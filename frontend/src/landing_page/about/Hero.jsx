export default function Hero() {
  return (
    <div className="container hero-section">

      {/* 🔥 Heading */}
      <div className="hero-heading text-center">
        <h1>
          We pioneered the discount broking model in India. <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      {/* 🔥 Content */}
      <div className="row justify-content-center">

        {/* Left */}
        <div className="col-lg-5 col-md-6 hero-text-block">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha".
          </p>

          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms.
          </p>
        </div>

        {/* Right */}
        <div className="col-lg-5 col-md-6 hero-text-block">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p>
            <a href="/rahul" className="link-primary fw-medium">
              Rainmatter
            </a>, our fintech fund and incubator, has invested in several fintech startups.
          </p>

          <p>
            Catch up on the latest updates on our{" "}
            <a href="/rahul" className="link-primary">blog</a> or see what the media is{" "}
            <a href="#" className="link-primary">saying about us</a>.
          </p>
        </div>

      </div>

    </div>
  );
}