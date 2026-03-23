export default function Education() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 ml-2">
                    <img src="media/education.svg" alt="education image" style={{ width: "80%" }}></img>
                </div>
                <div className="col-6">
                    <h3>Free and open market education</h3>
                    <div className="row mt-4">
                        <p className="fs-10">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                        </p>
                        <a href="#" className="me-5 text-primary" style={{ textDecoration: "none" }}>
                            Versity
                            <i className="fa-solid fa-right-long ms-2"></i>
                        </a>

                    </div>
                    <div className="row mt-4">
                        <p className="fs-10">TradingQ&A, the most active trading and investment community in India for all your market related queries.
                        </p>
                        <a href="#" className="me-5 text-primary" style={{ textDecoration: "none" }}>
                            TradingQ&A
                            <i className="fa-solid fa-right-long ms-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}


