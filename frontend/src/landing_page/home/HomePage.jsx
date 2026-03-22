import Hero from  "./Hero.jsx"
import Awards from  "./Awards.jsx"
import Stats from  "./Stats.js"
import Pricing from  "./Pricing.jsx"
import Openaccount from  "../Openaccount.jsx"
import Navbar from "../Navbar.jsx"
import Footer from "../Footer.jsx"

export default function HomePage(){
    return(
    <>
    <Hero />
    <Awards />
     <Stats />
     <Pricing />
     <Openaccount />
     <Navbar />
    <Footer />
    </>
    );
}

