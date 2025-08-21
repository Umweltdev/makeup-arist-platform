import { Navbar } from "@/components/index"
import HeroSection from "./components/heroSection"
import FeaturedLooks from "./components/featuredLooks"
import Services from "./components/services"
import Portfolio from "./components/portfolio"
import AboutTheArtist from "./components/aboutTheArtist"
import Contact from "./components/contact"
import { useState } from "react"
import ServicesPage from "../ServicesPage"
import PortfolioPage from "../PortfolioPage"
import ContactPage from "../ContactPage"
import Dashboard from "../Dashboard"


const LandingPage = () => {
    const [activePage, setActivePage] = useState("Home")
    return (
        <div>
            <Navbar setActivePage={setActivePage} activePage={activePage} />
            {activePage === "Services" ? (
                <ServicesPage />
            ) : activePage === "Portfolio" ? (
                <PortfolioPage />
            ) : activePage === "Contact" ? (
                <ContactPage />
            ) : activePage === "Dashboard" ? (
                <Dashboard />
           
            ) : (
                <div className="min-h-screen bg-white ">
                    <HeroSection />
                    <FeaturedLooks />
                    <Services />
                    <Portfolio setActivePage={setActivePage}/>
                    <AboutTheArtist />
                    <Contact />
                </div>
            )}
        </div>
    )
}

export default LandingPage
