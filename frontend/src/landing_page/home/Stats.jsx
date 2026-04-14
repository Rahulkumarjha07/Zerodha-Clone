export default function Stats() {
    return (
        <div className="container py-4 py-md-5">
            <div className="row align-items-center">

                {/* LEFT SECTION */}
                <div className="col-12 col-md-6 mb-4 mb-md-0 text-center text-md-start px-3 px-md-5">
                    <h1 className="fw-bold mb-4 fs-3 fs-md-2">
                        Trust with confidence
                    </h1>

                    <div className="mb-3">
                        <h3 className="fs-5 fw-semibold">Customer-first always</h3>
                        <p className="text-muted">
                            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.
                        </p>
                    </div>

                    <div className="mb-3">
                        <h3 className="fs-5 fw-semibold">No spam or gimmicks</h3>
                        <p className="text-muted">
                            No gimmicks, spam, gamification, or annoying push notifications.
                        </p>
                    </div>

                    <div className="mb-3">
                        <h3 className="fs-5 fw-semibold">The Zerodha universe</h3>
                        <p className="text-muted">
                            Not just an app, but a whole ecosystem with 30+ fintech startups.
                        </p>
                    </div>

                    <div>
                        <h3 className="fs-5 fw-semibold">Do better with money</h3>
                        <p className="text-muted">
                            With Nudge and Kill Switch, Zerodha helps you make better decisions.
                        </p>
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className="col-12 col-md-6 text-center px-3">
                    <img 
                        src="media/ecosystem.png" 
                        alt="ecosystem" 
                        className="img-fluid mb-4"
                        style={{ maxWidth: "90%" }}
                    />

                    {/* LINKS */}
                    <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                        <a 
                            href="#" 
                            className="text-primary"
                            style={{ textDecoration: "none" }}
                        >
                            Explore our Products 
                            <i className="fa-solid fa-right-long ms-2"></i>
                        </a>

                        <a 
                            href="#" 
                            className="text-primary"
                            style={{ textDecoration: "none" }}
                        >
                            Try Kite demo
                            <i className="fa-solid fa-right-long ms-2"></i>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}