export default function Pricing() {
    return (
        <div className="container py-4 py-md-5">
            <div className="row align-items-center">

                {/* LEFT CONTENT */}
                <div className="col-12 col-md-6 mb-4 mb-md-0 text-center text-md-start">
                    <h1 className="fw-bold mb-3">
                        Unbeatable Pricing
                    </h1>

                    <p className="text-muted">
                        We pioneered the concept of discount broking and price transparency in India. 
                        Flat fees and no hidden charges.
                    </p>

                    <a 
                        href="#" 
                        className="text-primary d-inline-block mt-2"
                        style={{ textDecoration: "none" }}
                    >
                        See Pricing 
                        <i className="fa-solid fa-right-long ms-2"></i>
                    </a>
                </div>

                {/* RIGHT BOX */}
                <div className="col-12 col-md-6">
                    <div 
                        className="d-flex flex-column flex-md-row text-center"
                        style={{
                            border: "2px solid #ddd",
                            borderRadius: "6px",
                            overflow: "hidden"
                        }}
                    >
                        {/* LEFT */}
                        <div className="w-100 w-md-50 p-4">
                            <h1 className="mb-2 fw-bold">&#8377;0</h1>
                            <p className="text-muted">
                                Free equity delivery and direct mutual funds
                            </p>
                        </div>

                        {/* DIVIDER */}
                        <div 
                            className="d-none d-md-block"
                            style={{ width: "1px", background: "#ddd" }}
                        ></div>

                        {/* MOBILE DIVIDER */}
                        <div 
                            className="d-block d-md-none"
                            style={{ height: "1px", background: "#ddd" }}
                        ></div>

                        {/* RIGHT */}
                        <div className="w-100 w-md-50 p-4">
                            <h1 className="mb-2 fw-bold">&#8377;20</h1>
                            <p className="text-muted">
                                Intraday and F&amp;O
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}