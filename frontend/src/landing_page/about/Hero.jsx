export default function Hero() {
    return (
        <div className="container py-5">

            {/* Top Heading */}
            <div
                className="text-center mb-1 "
                style={{ borderBottom: "1px solid #eee", height: "200px" }}
            >
                <h1 className="fs-3 text-muted   fw-medium mt-5">
                    We pioneered the discount broking model in India. <br />
                    Now, we are breaking ground with our technology.
                </h1>
            </div>

            {/* Content Section */}
            <div className="row justify-content-center ">

                {/* Left Side */}
                <div className="col-lg-5 col-md-6 mt-5">
                    <p className="mb-4 text-muted" style={{ lineHeight: "1.9" }}>
                        We kick-started operations on the 15th of August, 2010 with the goal
                        of breaking all barriers that traders and investors face in India in
                        terms of cost, support, and technology. We named the company
                        Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
                        barrier.
                    </p>

                    <p className="mb-4 text-muted" style={{ lineHeight: "1.9" }}>
                        Today, our disruptive pricing models and in-house technology have
                        made us the biggest stock broker in India.
                    </p>

                    <p className="text-muted" style={{ lineHeight: "1.9" }}>
                        Over 1.6+ crore clients place billions of orders every year through
                        our powerful ecosystem of investment platforms, contributing over
                        15% of all Indian retail trading volumes.
                    </p>
                </div>

                {/* Right Side */}
                <div className="col-lg-5 col-md-6 mt-5">
                    <p className="mb-4 text-muted" style={{ lineHeight: "1.9" }}>
                        In addition, we run a number of popular open online educational and
                        community initiatives to empower retail traders and investors.
                    </p>

                    <p className="mb-4 text-muted" style={{ lineHeight: "1.9" }}>
                        <a href="/rahul" className="text-primary text-decoration-none fw-medium">
                            Rainmatter
                        </a>
                        , our fintech fund and incubator, has invested in several fintech
                        startups with the goal of growing the Indian capital markets.
                    </p>

                    <p className="text-muted" style={{ lineHeight: "1.9" }}>
                        And yet, we are always up to something new every day. Catch up on the
                        latest updates on our{" "}
                        <a href="/rahul" className="text-primary text-decoration-none">
                            blog
                        </a>{" "}
                        or see what the media is{" "}
                        <a href="#" className="text-primary text-decoration-none">
                            saying about us
                        </a>{" "}
                        or learn more about our{" "}
                        <a href="#" className="text-primary text-decoration-none">
                            business and product philosophies
                        </a>.
                    </p>
                </div>

            </div>
            
        </div>
    );
}