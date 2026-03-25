export default function Rightsection({
  imageurl,
  productname,
  productdescription,
  trydemo,
  learnmore,
  googleplay,
  appstore,
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center justify-content-between">

        {/* LEFT CONTENT */}
        <div className="col-lg-5">

          <h2 className="fw-semibold mb-4" style={{ fontSize: "32px" }}>
            {productname}
          </h2>

          <p
            className="text-muted mb-4"
            style={{ lineHeight: "1.9", fontSize: "16px" }}
          >
            {productdescription}
          </p>

          {/* LINKS */}
          <div className="d-flex align-items-center gap-4 mb-4">

            {trydemo && (
              <a
                href={trydemo}
                className="text-primary fw-medium text-decoration-none"
              >
                Try demo <i className="fa-solid fa-arrow-right ms-1"></i>
              </a>
            )}

            {learnmore && (
              <a
                href={learnmore}
                className="text-primary fw-medium text-decoration-none"
              >
                Learn more <i className="fa-solid fa-arrow-right ms-1"></i>
              </a>
            )}

          </div>

          {/* STORE BUTTONS */}
          <div className="d-flex gap-3">
            {googleplay && (
              <a href={googleplay}>
                <img
                  src="/media/googlePlayBadge.svg"
                  alt="Google Play"
                  style={{ height: "42px" }}
                />
              </a>
            )}

            {appstore && (
              <a href={appstore}>
                <img
                  src="/media/appstoreBadge.svg"
                  alt="App Store"
                  style={{ height: "42px" }}
                />
              </a>
            )}
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="col-lg-6 text-center position-relative">

          <img
            src={imageurl}
            alt="product"
            className="img-fluid shadow-sm"
            style={{
              maxWidth: "100%",
              borderRadius: "10px"
            }}
          />

        </div>



      </div>
      
    </div>
  );
}