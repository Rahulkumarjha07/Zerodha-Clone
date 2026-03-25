import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();

    return (
        <div className='container p-5 mb-5'>
            <div className="row text-center">
                <img src='media/homeHero.png' alt='trading dashboard' className='mb-5' />

                <h1 className='mt-2'>Invest in everything</h1>

                <p>Online platform to invest, derivatives, mutual funds, stocks and more</p>

                <div className="d-flex justify-content-center">
                    <Button 
                        variant="contained" 
                        size="medium" 
                        onClick={() => navigate("/signup")}
                    >
                        Sign Up for free
                    </Button>
                </div>
            </div>
        </div>
    );
}