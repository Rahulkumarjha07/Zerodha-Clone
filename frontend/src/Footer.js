export default function Footer() {
  return (
    <div className="footer">

      <div className="container">

        <div className="row">

          {/* 🔥 LEFT */}
          <div className="col-lg-3 col-md-6 footer-left">
            <img src="/media/logo.svg" alt="logo" className="footer-logo" />

            <p className="footer-text">
              © 2010 - 2026, Zerodha Broking Ltd.
              <br />All rights reserved.
            </p>

            <div className="footer-icons">
              <i className="fab fa-x-twitter"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
            </div>

            <hr />

            <div className="footer-icons">
              <i className="fab fa-youtube"></i>
              <i className="fab fa-whatsapp"></i>
              <i className="fab fa-telegram"></i>
            </div>

            <div className="footer-apps">
              <img src="/media/googlePlayBadge.svg" alt="google play" />
              <img src="/media/appstoreBadge.svg" alt="app store" />
            </div>
          </div>

          {/* 🔥 ACCOUNT */}
          <div className="col-lg-3 col-md-6 footer-col">
            <h6>Account</h6>
            <a href="#">Open demat account</a>
            <a href="#">Minor demat account</a>
            <a href="#">NRI demat account</a>
            <a href="#">HUF demat account</a>
            <a href="#">Commodity</a>
            <a href="#">Dematerialisation</a>
            <a href="#">Fund transfer</a>
            <a href="#">MTF</a>
          </div>

          {/* 🔥 SUPPORT */}
          <div className="col-lg-3 col-md-6 footer-col">
            <h6>Support</h6>
            <a href="#">Contact us</a>
            <a href="#">Support portal</a>
            <a href="#">How to file a complaint?</a>
            <a href="#">Status of complaints</a>
            <a href="#">Bulletin</a>
            <a href="#">Circular</a>
            <a href="#">Z-Connect blog</a>
            <a href="#">Downloads</a>
          </div>

          {/* 🔥 COMPANY */}
          <div className="col-lg-3 col-md-6 footer-col">
            <h6>Company</h6>
            <a href="#">About</a>
            <a href="#">Philosophy</a>
            <a href="#">Press & media</a>
            <a href="#">Careers</a>
            <a href="#">Zerodha Cares (CSR)</a>
            <a href="#">Zerodha.tech</a>
            <a href="#">Open source</a>
            <a href="#">Referral program</a>
          </div>

        </div>

      </div>
    </div>
  );
}