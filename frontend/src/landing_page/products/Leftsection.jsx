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
    <div className="container left-section">

      <div className="row align-items-center">

        {/* 🔥 LEFT IMAGE */}
        <div className="col-lg-7 col-md-6 text-center left-image">
          <img src={imageurl} alt="product" />
        </div>

        {/* 🔥 RIGHT CONTENT */}
        <div className="col-lg-5 col-md-6 left-text">

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

      </div>

    </div>
  );
}