export default function Footer() {
    const columnLinkStyle = {
        display: "block",
        marginBottom: "10px",
        color: "#6c757d",
        textDecoration: "none",
        fontSize: "14px"
    };

    const legalLinkStyle = {
        color: "#387ed1",
        textDecoration: "none"
    };

    const iconStyle = {
        fontSize: "18px",
        marginRight: "15px",
        color: "#6c757d"
    };

    const textStyle = {
        fontSize: "13px",
        color: "#6c757d",
        lineHeight: "1.7"
    };

    return (
        <div style={{ background: "#f8f9fa", padding: "50px 0" }}>
            <div className="container">

                <div className="row">

                    {/* LEFT */}
                    <div className="col-3">
                        <img src="/media/logo.svg" alt="logo" style={{ width: "60%" }} />

                        <p style={{ marginTop: "15px", fontSize: "14px", color: "#6c757d" }}>
                            © 2010 - 2026, Zerodha Broking Ltd.
                            <br />All rights reserved.
                        </p>

                        <div style={{ marginTop: "10px" }}>
                            <i className="fab fa-x-twitter" style={iconStyle}></i>
                            <i className="fab fa-facebook" style={iconStyle}></i>
                            <i className="fab fa-instagram" style={iconStyle}></i>
                            <i className="fab fa-linkedin" style={iconStyle}></i>
                        </div>

                        <hr style={{ width: "80%" }} />

                        <div>
                            <i className="fab fa-youtube" style={iconStyle}></i>
                            <i className="fab fa-whatsapp" style={iconStyle}></i>
                            <i className="fab fa-telegram" style={iconStyle}></i>
                        </div>

                        <div style={{ marginTop: "20px" }}>
                            <img src="/media/googlePlayBadge.svg" alt="google play" style={{ width: "120px", marginRight: "10px" }} />
                            <img src="/media/appstoreBadge.svg" alt="app store" style={{ width: "120px" }} />
                        </div>
                    </div>

                    {/* ACCOUNT */}
                    <div className="col-3">
                        <h6>Account</h6>
                        <a href="#" style={columnLinkStyle}>Open demat account</a>
                        <a href="#" style={columnLinkStyle}>Minor demat account</a>
                        <a href="#" style={columnLinkStyle}>NRI demat account</a>
                        <a href="#" style={columnLinkStyle}>HUF demat account</a>
                        <a href="#" style={columnLinkStyle}>Commodity</a>
                        <a href="#" style={columnLinkStyle}>Dematerialisation</a>
                        <a href="#" style={columnLinkStyle}>Fund transfer</a>
                        <a href="#" style={columnLinkStyle}>MTF</a>
                    </div>

                    {/* SUPPORT */}
                    <div className="col-3">
                        <h6>Support</h6>
                        <a href="#" style={columnLinkStyle}>Contact us</a>
                        <a href="#" style={columnLinkStyle}>Support portal</a>
                        <a href="#" style={columnLinkStyle}>How to file a complaint?</a>
                        <a href="#" style={columnLinkStyle}>Status of complaints</a>
                        <a href="#" style={columnLinkStyle}>Bulletin</a>
                        <a href="#" style={columnLinkStyle}>Circular</a>
                        <a href="#" style={columnLinkStyle}>Z-Connect blog</a>
                        <a href="#" style={columnLinkStyle}>Downloads</a>
                    </div>

                    {/* COMPANY */}
                    <div className="col-3">
                        <h6>Company</h6>
                        <a href="#" style={columnLinkStyle}>About</a>
                        <a href="#" style={columnLinkStyle}>Philosophy</a>
                        <a href="#" style={columnLinkStyle}>Press & media</a>
                        <a href="#" style={columnLinkStyle}>Careers</a>
                        <a href="#" style={columnLinkStyle}>Zerodha Cares (CSR)</a>
                        <a href="#" style={columnLinkStyle}>Zerodha.tech</a>
                        <a href="#" style={columnLinkStyle}>Open source</a>
                        <a href="#" style={columnLinkStyle}>Referral program</a>
                    </div>

                </div>

                {/* LEGAL SECTION */}
                

            </div>
        </div>
    );
}