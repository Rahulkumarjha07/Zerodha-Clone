export default function Hero() {
  return (
    <div className="support-hero">
      <div className="container">

        {/* TOP BAR */}
        <div className="top-bar">
          <span>Support Portal</span>
          <a href="#">Track Tickets</a>
        </div>

        <div className="row align-items-start">

          {/* LEFT */}
          <div className="col-md-7">
            <h2 className="hero-text">
              Search for an answer or browse help topics
              <br />
              to create a ticket
            </h2>

            <input
              type="text"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
              className="search-input"
            />

            <div className="links">
              <a href="#">Track account opening</a>
              <a href="#">Track segment activation</a>
              <a href="#">Intraday margins</a>
              <a href="#">Kite user manual</a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-md-5">
            <h6 className="featured">Featured</h6>

            <ol className="feature-list">
              <li>
                <a href="#">
                  Current Takeovers and Delisting – January 2024
                </a>
              </li>
              <li>
                <a href="#">
                  Latest Intraday leverages – MIS & CO
                </a>
              </li>
            </ol>
          </div>

        </div>
      </div>
    </div>
  );
}