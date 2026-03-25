export default function Hero(){
    return(
    <div className="container p-5">
        <div className="row text-center mt-5 mb-5">
            <h3 className="fs-2 mb-2">Charges</h3>
            <p className="fs-4 text-muted mb-5 ">List of all charges and taxes</p>

        </div>

        <div className="row">
            <div className="col-4">
                <img src="media/pricing0.svg" alt="coin photo" style={{width:"80%"}} className="mb-3 lh-3"></img>
                <h3 className="mb-3">Free equity delivery</h3>
                <p className="fs-6 text-muted   " style={{ lineHeight: "1.8" }}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
             <div className="col-4">s
                 <img src="media/other-trades.svg" alt="coin photo" style={{width:"80%"}} className="mb-3"></img>
                <h3 className="mb-3">Intraday and F&O trades</h3>
                <p className="fs-6 text-muted"  style={{ lineHeight: "1.8" }}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
             </div>
              <div className="col-4">
                 <img src="media/pricing0.svg" alt="coin photo" style={{width:"80%"}} className="mb-3"></img>
                <h3 className="mb-3">Free equity delivery</h3>
                <p className="fs-6 text-muted   " style={{ lineHeight: "1.8" }}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
              </div>
        </div>
    </div>
    );
}