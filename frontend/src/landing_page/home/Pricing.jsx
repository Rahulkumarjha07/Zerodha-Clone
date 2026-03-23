export default function Pricing(){
    return(
        <div className="container">
            <div className="row  p-5">
                <div className="col-5">
                     <h1>Unbeatable Pricing</h1>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India. 
                        Flat fees and no hidden charges.
                    </p>

                    <a href="#" className="me-5 text-primary" style={{textDecoration:"none"}}>
                        See Pricing 
                        <i className="fa-solid fa-right-long ms-2"></i>
                    </a>


                </div>
                <div className="col-1"></div>
                <div className="col-6">
                    <div 
                        className="d-flex text-center"
                        style={{
                            border: "2px solid #ddd",
                            borderRadius: "3px",
                            overflow: "hidden"
                        }}
                    >
                        {/* LEFT */}
                        <div className="w-50 p-4 ">
                            <h1 className="mb-2">&#8377;0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>

                        {/* DIVIDER */}
                        <div style={{width:"1px", background:"#ddd"}}></div>

                        {/* RIGHT */}
                        <div className="w-50 p-4">
                            <h1 className="mb-2">&#8377;20</h1>
                            <p>Intraday and F&amp;O</p>
                        </div>
                    </div>
            


                </div>
            </div>
            
        </div>
    );
}