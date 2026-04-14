export default function Brokerage() {
  return (
    <div className="container py-4 py-md-5">
      <div className="row">

        {/* LEFT SIDE */}
        <div className="col-12 col-md-8 mb-4 mb-md-0 px-3 px-md-4">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="text-center text-md-start fw-semibold mb-4 fs-5">
              Brokerage calculator
            </h3>
          </a>

          <ul className="text-muted ps-3" style={{ lineHeight: "1.8" }}>
            <li>Call & Trade and RMS auto-squareoff: ₹50 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>Physical contract notes: ₹20 per note + courier charges.</li>
            <li>For NRI (non-PIS): 0.5% or ₹100 per order (whichever lower).</li>
            <li>For NRI (PIS): 0.5% or ₹200 per order (whichever lower).</li>
            <li>Debit balance orders: ₹40 per order instead of ₹20.</li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-12 col-md-4 px-3 px-md-4">
          <div 
            className="border rounded p-4 text-center"
            style={{ background: "#fafafa" }}
          >
            <h5 className="mb-3 fw-semibold">
              List of charges
            </h5>

            <p className="text-muted">
              View detailed breakdown of brokerage and taxes here.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}