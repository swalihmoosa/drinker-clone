import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Header from './components/screens/Header';
import Wines from './components/screens/Wines';
import About from './components/screens/About';
import Testimonial from './components/screens/Testimonial';
import Footer from './components/screens/Footer';

export default function App() {
  return (
    <>
    <Header />
    <Wines />
    <About />
    <Testimonial />
    <Footer />
    </>
  )
}

