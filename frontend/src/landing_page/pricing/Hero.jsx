export default function Hero() {
    return (
        <div className="container py-4 py-md-5">

            {/* HEADER */}
            <div className="row text-center mb-4 mb-md-5">
                <h3 className="fw-bold fs-3 mb-2">Charges</h3>
                <p className="text-muted fs-5">
                    List of all charges and taxes
                </p>
            </div>

            {/* CARDS */}
            <div className="row text-center">

                {/* CARD 1 */}
                <div className="col-12 col-md-4 mb-4 px-3">
                    <img 
                        src="media/pricing0.svg" 
                        alt="equity" 
                        className="img-fluid mb-3"
                        style={{ maxWidth: "70%" }}
                    />

                    <h3 className="mb-3 fs-5 fw-semibold">
                        Free equity delivery
                    </h3>

                    <p className="text-muted" style={{ lineHeight: "1.7" }}>
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>

                {/* CARD 2 */}
                <div className="col-12 col-md-4 mb-4 px-3">
                    <img 
                        src="media/other-trades.svg" 
                        alt="trades" 
                        className="img-fluid mb-3"
                        style={{ maxWidth: "70%" }}
                    />

                    <h3 className="mb-3 fs-5 fw-semibold">
                        Intraday and F&amp;O trades
                    </h3>

                    <p className="text-muted" style={{ lineHeight: "1.7" }}>
                        Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>

                {/* CARD 3 */}
                <div className="col-12 col-md-4 mb-4 px-3">
                    <img 
                        src="media/pricing0.svg" 
                        alt="equity" 
                        className="img-fluid mb-3"
                        style={{ maxWidth: "70%" }}
                    />

                    <h3 className="mb-3 fs-5 fw-semibold">
                        Free equity delivery
                    </h3>

                    <p className="text-muted" style={{ lineHeight: "1.7" }}>
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>

            </div>
        </div>
    );
}