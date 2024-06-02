import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import SliderGallery1 from './components/SliderGallery1';
import CommentsList from './components/CommentsList';
import TourInformation from './components/TourInformation';
import QuickFacts from './components/QuickFacts';
import Footer from './components/Footer';
import Meetup from './components/Meetup';
import SliderGallery2 from './components/SliderGallery2';
import SliderGallery3 from './components/SliderGallery3';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>  
      <Banner/>
      <SliderGallery1/>
      <QuickFacts/>
      <SliderGallery2/>
      <TourInformation/>
      <Meetup/>
      <SliderGallery3/>
      <AboutUs/>
      <CommentsList/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
