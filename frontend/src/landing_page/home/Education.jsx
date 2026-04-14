export default function Education() {
    return (
        <div className="container py-4 py-md-5">
            <div className="row align-items-center">

                {/* IMAGE */}
                <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
                    <img 
                        src="media/education.svg" 
                        alt="education" 
                        className="img-fluid"
                        style={{ maxWidth: "80%" }}
                    />
                </div>

                {/* CONTENT */}
                <div className="col-12 col-md-6 text-center text-md-start px-3">
                    <h3 className="fw-bold mb-4">
                        Free and open market education
                    </h3>

                    {/* FIRST BLOCK */}
                    <div className="mb-4">
                        <p className="text-muted">
                            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                        </p>

                        <a 
                            href="#" 
                            className="text-primary"
                            style={{ textDecoration: "none" }}
                        >
                            Varsity
                            <i className="fa-solid fa-right-long ms-2"></i>
                        </a>
                    </div>

                    {/* SECOND BLOCK */}
                    <div>
                        <p className="text-muted">
                            TradingQ&amp;A, the most active trading and investment community in India for all your market related queries.
                        </p>

                        <a 
                            href="#" 
                            className="text-primary"
                            style={{ textDecoration: "none" }}
                        >
                            TradingQ&amp;A
                            <i className="fa-solid fa-right-long ms-2"></i>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}