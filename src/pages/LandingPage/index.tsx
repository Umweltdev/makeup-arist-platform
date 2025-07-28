import {Navbar} from "@/components/index";
import HeroSection from "./components/heroSection";
import FeaturedLooks from "./components/featuredLooks";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import AboutTheArtist from "./components/aboutTheArtist";
import Contact from "./components/contact";

const LandingPage=()=>{
    return(
        <div>
            <Navbar/>
            <div className="min-h-screen bg-white px-4 lg:px-20 mt-30 ">
                <HeroSection/>
                <FeaturedLooks/>
                <Services/>
                <Portfolio/>
                <AboutTheArtist/>
                <Contact/>
            </div>
        </div>
    )
}

export default LandingPage;