import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import ClientInquiryPage from './pages/ClientInquiryPage';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <Router>    
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/portfolio' element={<PortfolioPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/services" element={<ServicesPage/>}/>
      <Route path='/client-inquiry' element={<ClientInquiryPage/>}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      
    </Routes>
    </Router>

  )
}

export default App
