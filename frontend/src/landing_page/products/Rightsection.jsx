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
    <div className="container right-section">

      <div className="row align-items-center justify-content-between">

        {/* 🔥 LEFT CONTENT */}
        <div className="col-lg-5 col-md-6 right-text">

          <h2 className="product-title">
            {productname}
          </h2>

          <p className="product-desc">
            {productdescription}
          </p>

          {/* 🔥 LINKS */}
          <div className="product-links">

            {trydemo && (
              <a href={trydemo}>
                Try demo <i className="fa-solid fa-arrow-right ms-1"></i>
              </a>
            )}

            {learnmore && (
              <a href={learnmore}>
                Learn more <i className="fa-solid fa-arrow-right ms-1"></i>
              </a>
            )}

          </div>

          {/* 🔥 STORE BUTTONS */}
          <div className="store-buttons">
            {googleplay && (
              <a href={googleplay}>
                <img src="/media/googlePlayBadge.svg" alt="Google Play" />
              </a>
            )}

            {appstore && (
              <a href={appstore}>
                <img src="/media/appstoreBadge.svg" alt="App Store" />
              </a>
            )}
          </div>

        </div>

        {/* 🔥 RIGHT IMAGE */}
        <div className="col-lg-6 col-md-6 text-center right-image">
          <img src={imageurl} alt="product" />
        </div>

      </div>

    </div>
  );
}