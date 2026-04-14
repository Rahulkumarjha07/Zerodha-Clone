export default function Awards() {
  return (
    <div className="container py-4 py-md-5">
      <div className="row align-items-center">

        {/* IMAGE */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0 px-3 px-md-5">
          <img 
            src="media/largestBroker.svg" 
            alt="trophy" 
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

        {/* CONTENT */}
        <div className="col-12 col-md-6 text-center text-md-start px-3 px-md-5">
          <h2 className="fw-bold mb-3">
            Largest Stock Broker in India
          </h2>

          <p className="text-muted mb-4">
            Zerodha has 2+ million active clients. It contributes to over 15% 
            of all retail trading volume in India daily. Founded in 2010, 
            it is known for its discount brokerage model (low fees).
          </p>

          {/* LISTS */}
          <div className="row text-start">
            
            {/* FIRST LIST */}
            <div className="col-12 col-sm-6 mb-3">
              <ul className="list-unstyled">
                <li className="mb-2">📈 Stocks & IPOs</li>
                <li className="mb-2">📊 Futures & Options (F&O)</li>
                <li>🪙 Commodity derivatives</li>
              </ul>
            </div>

            {/* SECOND LIST */}
            <div className="col-12 col-sm-6 mb-3">
              <ul className="list-unstyled">
                <li className="mb-2">💱 Currency derivatives</li>
                <li className="mb-2">💰 Direct Mutual Funds</li>
                <li>🏦 Bonds & Government Securities</li>
              </ul>
            </div>

          </div>

          {/* PRESS LOGOS */}
          <div className="mt-4 text-center text-md-start">
            <img 
              src="media/pressLogos.png" 
              alt="press logos" 
              className="img-fluid"
              style={{ maxWidth: "80%" }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}