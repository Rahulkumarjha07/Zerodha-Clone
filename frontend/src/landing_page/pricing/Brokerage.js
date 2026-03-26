export default function Brokerage() {
  return (
    <div className="container mb-5">
      <div className="row">

        {/* LEFT SIDE */}
        <div className="col-8 p-4">
          <a href="#" style={{textDecoration:"none"}}   >
            <h3 className="text-center fs-5 mb-4" >
              Brokerage calculator
            </h3>
          </a>

          <ul className="text-muted" style={{ lineHeight: "2" }}>
            <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
            <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order (whichever is lower).</li>
            <li>For NRI account (PIS), 0.5% or ₹200 per executed order (whichever is lower).</li>
            <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20.</li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-4 p-4">
          <div className="border rounded p-3">
            <h5 className="text-center mb-3">List of charges</h5>
            <p className="text-muted text-center">
              View detailed breakdown of brokerage and taxes here.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}