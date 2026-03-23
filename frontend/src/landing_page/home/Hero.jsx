import Button from '@mui/material/Button';

export default function Hero(){
    return(
        <div className='container p-5 mb-5'>
            <div className="row text-center">
                <img src='media/homeHero.png' alt='trading dashboard' className='mb-5' />

                <h1 className='mt-2'>Invest in everything</h1>

                <p>Online platform to invest, derivatives, mutual funds, stocks and more</p>

               <div className="d-flex justify-content-center">
                  <Button variant="contained" size="medium">
                      Sign Up for free
                    </Button>
                </div>
            </div>
        </div>
    );
}