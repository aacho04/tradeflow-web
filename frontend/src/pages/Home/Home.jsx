import react from 'react';
import OpenAccount from "../../components/OpenAccount/OpenAccount";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "../Pricing/Pricing";
import Education from "./Education";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";    
function Home(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Footer/>
        </>
    );

}
export default Home;