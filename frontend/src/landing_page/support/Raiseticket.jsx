import { Link } from "react-router-dom";

export default function SupportPage() {
  return (
    <div className="container py-5">

      {/* HEADER */}
      <div className="text-center mb-5">
        <h2 className="fw-semibold">
          To create a ticket, select a relevant topic
        </h2>
        <p className="text-muted">
          Choose a category to quickly find help
        </p>
      </div>

      <div className="row g-5">

        {/* COLUMN 1 */}
        <div className="col-md-4">
          <h5 className="fw-bold mb-3">
            <i className="fa-solid fa-user-plus me-2"></i>
            Account Opening
          </h5>

          <ul className="list-unstyled support-list">
            <li><Link to="#">Online Account Opening</Link></li>
            <li><Link to="#">Offline Account Opening</Link></li>
            <li><Link to="#">Company, Partnership and HUF Account</Link></li>
            <li><Link to="#">NRI Account Opening</Link></li>
            <li><Link to="#">Charges at Zerodha</Link></li>
            <li><Link to="#">3-in-1 Account</Link></li>
            <li><Link to="#">Getting Started</Link></li>
          </ul>

          <h5 className="fw-bold mt-5 mb-3">
            <i className="fa-solid fa-wallet me-2"></i>
            Funds
          </h5>

          <ul className="list-unstyled support-list">
            <li><Link to="#">Adding Funds</Link></li>
            <li><Link to="#">Fund Withdrawal</Link></li>
            <li><Link to="#">eMandates</Link></li>
            <li><Link to="#">Adding Bank Accounts</Link></li>
          </ul>
        </div>

        {/* COLUMN 2 */}
        <div className="col-md-4">
          <h5 className="fw-bold mb-3">
            <i className="fa-solid fa-user me-2"></i>
            Your Account
          </h5>

          <ul className="list-unstyled support-list">
            <li><Link to="#">Login Credentials</Link></li>
            <li><Link to="#">Account Modification</Link></li>
            <li><Link to="#">DP ID & Bank Details</Link></li>
            <li><Link to="#">Your Profile</Link></li>
            <li><Link to="#">Transfer of Shares</Link></li>
          </ul>

          <h5 className="fw-bold mt-5 mb-3">
            <i className="fa-solid fa-chart-line me-2"></i>
            Console
          </h5>

          <ul className="list-unstyled support-list">
            <li><Link to="#">Reports</Link></li>
            <li><Link to="#">Ledger</Link></li>
            <li><Link to="#">Portfolio</Link></li>
            <li><Link to="#">IPO</Link></li>
            <li><Link to="#">Referral Program</Link></li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div className="col-md-4">
          <h5 className="fw-bold mb-3">
            <i className="fa-solid fa-chart-column me-2"></i>
            Trading & Platforms
          </h5>

          <ul className="list-unstyled support-list">
            <li><Link to="#">Margin & Leverage</Link></li>
            <li><Link to="#">Kite Web & Mobile</Link></li>
            <li><Link to="#">Trading FAQs</Link></li>
            <li><Link to="#">Corporate Actions</Link></li>
            <li><Link to="#">Sentinel</Link></li>
            <li><Link to="#">Kite API</Link></li>
            <li><Link to="#">Pi Platform</Link></li>
            <li><Link to="#">Stockreports+</Link></li>
            <li><Link to="#">GTT</Link></li>
          </ul>

          <h5 className="fw-bold mt-5 mb-3">
            <i className="fa-regular fa-circle me-2"></i>
            Coin (Mutual Funds)
          </h5>

          <ul className="list-unstyled support-list">
            <li><Link to="#">Understanding Mutual Funds</Link></li>
            <li><Link to="#">About Coin</Link></li>
            <li><Link to="#">Buy / Sell</Link></li>
            <li><Link to="#">Start SIP</Link></li>
            <li><Link to="#">Manage Portfolio</Link></li>
          </ul>
        </div>

      </div>
    </div>
  );
}