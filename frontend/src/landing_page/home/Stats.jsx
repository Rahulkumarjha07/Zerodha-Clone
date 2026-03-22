export default function Stats() {
    return (
        <div className="container p-5">
            <div className="row align-items-center">

                {/* Left Section */}
                <div className="col-6 p-5">
                    <h1 className="fs-2">Trust with confidence</h1>

                    <div>
                        <h3 className="mb-2 fs-4">Customer-first always</h3>
                        <p className="text-muted">
                            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-2 fs-4">No spam or gimmicks</h3>
                        <p className="text-muted">
                            No gimmicks, spam, gamification, or annoying push notifications.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-2 fs-4">The Zerodha universe</h3>
                        <p className="text-muted">
                            Not just an app, but a whole ecosystem with 30+ fintech startups.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-2 fs-4">Do better with money</h3>
                        <p className="text-muted">
                            With Nudge and Kill Switch, Zerodha helps you make better decisions.
                        </p>
                    </div>
                </div>

                {/* Right Section */}
                <div className="col-6 text-center p-3">
                    <img 
                        src="media/ecosystem.png" 
                        alt="ecosystem" 
                        className="img-fluid mb-0"
                        style={{width:"90%"}}
                    />

                   
                        <a href="#" className="me-5 text-primary mt-0" style={{textDecoration:"none"}}>
                            Explore our Products 
                            <i 
                                className="fa-solid fa-right-long ms-2"
                                style={{ color: "rgb(10, 113, 225)" }}
                            ></i>
                        </a>

                        <a href="#" className="text-primary" style={{textDecoration:"none"}}>
                            Try Kite demo
                             <i 
                                className="fa-solid fa-right-long ms-2"
                                style={{ color: "rgb(10, 113, 225)" }}
                            ></i>
                        </a>
                    
                </div>

            </div>
        </div>
    );
}