import Hero from  "./Hero.jsx"
import Awards from  "./Awards.jsx"
import Stats from  "./Stats.jsx"
import Pricing from  "./Pricing.jsx"
import Education from "./Education.jsx"
import Openaccount from "../../Openaccount"
import Navbar from "../../Navbar"
import Footer from "../../Footer"

export default function HomePage(){
    return(
    <>
     <Navbar />
    <Hero />
    <Awards />
     <Stats />
     <Pricing />
     <Education/>
     <Openaccount />
    <Footer />
    </>
    );
}

