import { Link } from "react-router-dom";

export default function SupportPage() {
  return (
    <div className="container py-4 py-md-5">

      {/* HEADER */}
      <div className="text-center mb-4 mb-md-5 px-2">
        <h2 className="fw-semibold fs-4 fs-md-2">
          To create a ticket, select a relevant topic
        </h2>
        <p className="text-muted">
          Choose a category to quickly find help
        </p>
      </div>

      <div className="row g-4 g-md-5">

        {/* COLUMN 1 */}
        <div className="col-12 col-md-6 col-lg-4">
          <Section 
            icon="fa-user-plus"
            title="Account Opening"
            links={[
              "Online Account Opening",
              "Offline Account Opening",
              "Company, Partnership and HUF Account",
              "NRI Account Opening",
              "Charges at Zerodha",
              "3-in-1 Account",
              "Getting Started"
            ]}
          />

          <Section 
            icon="fa-wallet"
            title="Funds"
            links={[
              "Adding Funds",
              "Fund Withdrawal",
              "eMandates",
              "Adding Bank Accounts"
            ]}
          />
        </div>

        {/* COLUMN 2 */}
        <div className="col-12 col-md-6 col-lg-4">
          <Section 
            icon="fa-user"
            title="Your Account"
            links={[
              "Login Credentials",
              "Account Modification",
              "DP ID & Bank Details",
              "Your Profile",
              "Transfer of Shares"
            ]}
          />

          <Section 
            icon="fa-chart-line"
            title="Console"
            links={[
              "Reports",
              "Ledger",
              "Portfolio",
              "IPO",
              "Referral Program"
            ]}
          />
        </div>

        {/* COLUMN 3 */}
        <div className="col-12 col-md-6 col-lg-4">
          <Section 
            icon="fa-chart-column"
            title="Trading & Platforms"
            links={[
              "Margin & Leverage",
              "Kite Web & Mobile",
              "Trading FAQs",
              "Corporate Actions",
              "Sentinel",
              "Kite API",
              "Pi Platform",
              "Stockreports+",
              "GTT"
            ]}
          />

          <Section 
            icon="fa-circle"
            title="Coin (Mutual Funds)"
            links={[
              "Understanding Mutual Funds",
              "About Coin",
              "Buy / Sell",
              "Start SIP",
              "Manage Portfolio"
            ]}
          />
        </div>

      </div>
    </div>
  );
}

/* 🔥 REUSABLE COMPONENT */
function Section({ icon, title, links }) {
  return (
    <div className="mb-4 mb-md-5">
      <h5 className="fw-bold mb-3">
        <i className={`fa-solid ${icon} me-2`}></i>
        {title}
      </h5>

      <ul className="list-unstyled">
        {links.map((item, index) => (
          <li key={index} className="mb-2">
            <Link 
              to="#" 
              className="text-decoration-none text-muted support-link"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}