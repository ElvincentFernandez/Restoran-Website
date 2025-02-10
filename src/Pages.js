import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/footer/Footer';
import Navbar from './Components/navbar/Navbar';
import Menu from './Components/menu/Menu';
import AboutUs from './Components/about/Aboutus';
import Location from './Components/location/Location'
import Home from './Components/home/Home'; // Impor Home component
import Gallery from './Components/gallery/Gallery';
import Contact from './Components/contact/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about-us" element={<AboutUs />} />            
            <Route path="/location" element={<Location />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
