import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();

    return (
        <div className='container py-4 py-md-5'>
            <div className="row text-center align-items-center">

                {/* IMAGE */}
                <div className="col-12">
                    <img 
                        src='media/homeHero.png' 
                        alt='trading dashboard' 
                        className='img-fluid mb-4 mb-md-5'
                        style={{ maxHeight: "400px", objectFit: "contain" }}
                    />
                </div>

                {/* TEXT */}
                <div className="col-12">
                    <h1 className='fw-bold display-6 display-md-4 mt-2'>
                        Invest in everything
                    </h1>

                    <p className='text-muted px-2 px-md-0 fs-6 fs-md-5'>
                        Online platform to invest, derivatives, mutual funds, stocks and more
                    </p>

                    {/* BUTTON */}
                    <div className="d-flex justify-content-center mt-3">
                        <Button 
                            variant="contained" 
                            size="large"
                            sx={{
                                px: { xs: 3, md: 5 },
                                py: { xs: 1, md: 1.5 },
                                fontSize: { xs: "14px", md: "16px" }
                            }}
                            onClick={() => navigate("/signup")}
                        >
                            Sign Up for free
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
}