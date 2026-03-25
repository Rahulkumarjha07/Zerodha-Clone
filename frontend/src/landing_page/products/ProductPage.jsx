
import Hero from "./Hero";
import Leftsection from "./Leftsection";
import Rightsection from "./Rightsection";
import Universe from "./Universe";

export default function ProductPage() {
    return (
        <>
           
            <Hero />
            <Leftsection imageurl="media/kite.png" productname="Kite"  productdescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." trydemo="" learnmore="" googleplay="" appstore=""/>
            <Rightsection imageurl="media/console.png" productname="Console"  productdescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." trydemo="" learnmore="" googleplay="" appstore=""/>
            <Leftsection imageurl="media/coin.png" productname="Coin"  productdescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." trydemo="" learnmore="" googleplay="" appstore=""/>
          
          <Rightsection imageurl="media/landing.svg" productname="Kite Connect API"  productdescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." trydemo="" learnmore="" googleplay="" appstore=""/>
          <Leftsection imageurl="media/varsity-products.svg" productname="Varsity mobile"  productdescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." trydemo="" learnmore="" googleplay="" appstore=""/>

          
           
            <Universe />
            
        </>
    );
}