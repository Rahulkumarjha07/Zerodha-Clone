export default function Leftsection({
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
      <div className="row align-items-center">

        {/* LEFT IMAGE */}
        <div className="col-lg-7 text-center">
          <img
            src={imageurl}
            alt="product"
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>
        <div className="col-1"></div>

        {/* RIGHT CONTENT */}
        <div className="col-lg-4">

          <h2 className="mb-3">{productname}</h2>

          <p className="text-muted mb-4" style={{ lineHeight: "1.8" }}>
            {productdescription}
          </p>

          {/* LINKS */}
          <div className="mb-4">
            <a
              href={trydemo}
              className="text-primary text-decoration-none me-4 fw-medium"
            >
              Try demo <i className="fa-solid fa-arrow-right ms-1"></i>
            </a>

            <a
              href={learnmore}
              className="text-primary text-decoration-none fw-medium"
            >
              Learn more <i className="fa-solid fa-arrow-right ms-1"></i>
            </a>
          </div>

          {/* STORE BUTTONS */}
          <div className="d-flex gap-3">
            <a href={googleplay}>
              <img
                src="media/googlePlayBadge.svg"
                alt="Google Play"
                style={{ height: "40px" }}
              />
            </a>

            <a href={appstore}>
              <img
                src="media/appstoreBadge.svg"
                alt="App Store"
                style={{ height: "40px" }}
              />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}