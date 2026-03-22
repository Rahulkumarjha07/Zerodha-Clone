export default function Awards() {
  return (
    <div className="container">
      <div className="row align-items-center">
        
        {/* Image */}
        <div className="col-6 p-5">
          <img 
            src="media/largestBroker.svg" 
            alt="trophy-image" 
            className="img-fluid"
          />
        </div>

        {/* Content */}
        <div className="col-6 p-5">
          <h2 className="mb-2">Largest Stock Broker in India</h2>

          <p className="mb-4">
            Zerodha has 2+ million active clients. It contributes to over 15% 
            of all retail trading volume in India daily. Founded in 2010, 
            it is known for its discount brokerage model (low fees).
          </p>

          <div className="row mt-4">
            
            {/* First list */}
            <div className="col-6">
              <ul>
                <li><p>📈 Stocks & IPOs</p></li>
                <li><p>📊 Futures & Options (F&O)</p></li>
                <li><p>🪙 Commodity derivatives</p></li>
              </ul>
            </div>

            {/* Second list */}
            <div className="col-6">
              <ul>
                <li><p>💱 Currency derivatives</p></li>
                <li><p>💰 Direct Mutual Funds</p></li>
                <li><p>🏦 Bonds & Government Securities</p></li>
              </ul>
            </div>

          </div>

          {/* Press Logos */}
          <div className="mt-4">
            <img 
              src="media/pressLogos.png" 
              alt="press-logo" 
              className="img-fluid"
            />
          </div>

        </div>
      </div>
    </div>
  );
}