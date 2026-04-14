export default function Hero() {
  return (
    <div className="support-hero py-4 py-md-5">
      <div className="container">

        {/* TOP BAR */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
          <span className="fw-semibold">Support Portal</span>
          <a href="#" className="text-primary" style={{ textDecoration: "none" }}>
            Track Tickets
          </a>
        </div>

        <div className="row align-items-start">

          {/* LEFT */}
          <div className="col-12 col-md-7 mb-4 mb-md-0 text-center text-md-start">
            <h2 className="fw-bold mb-4 fs-4 fs-md-2">
              Search for an answer or browse help topics
              <br className="d-none d-md-block" />
              to create a ticket
            </h2>

            <input
              type="text"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected.."
              className="form-control mb-3"
              style={{
                padding: "12px",
                borderRadius: "6px"
              }}
            />

            {/* LINKS */}
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
              <a href="#" className="text-primary text-decoration-none">
                Track account opening
              </a>
              <a href="#" className="text-primary text-decoration-none">
                Track segment activation
              </a>
              <a href="#" className="text-primary text-decoration-none">
                Intraday margins
              </a>
              <a href="#" className="text-primary text-decoration-none">
                Kite user manual
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-12 col-md-5 text-center text-md-start">
            <h6 className="text-muted mb-3">Featured</h6>

            <ol className="ps-3">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark">
                  Current Takeovers and Delisting – January 2024
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
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