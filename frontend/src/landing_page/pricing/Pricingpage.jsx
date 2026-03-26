import Hero from "./Hero"
import Openaccount from "../../Openaccount";
import Brokerage from "./Brokerage";
export default function PricingPage(){
    return(
        <>
        <Hero />
         <Openaccount/>
         <Brokerage/>
        </>
    );
}