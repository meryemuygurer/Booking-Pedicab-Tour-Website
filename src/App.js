import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import SliderGallery1 from './components/SliderGallery1';
import CommentsList from './components/CommentsList';
import TourInformation from './components/TourInformation';
import QuickFacts from './components/QuickFacts';
import Footer from './components/Footer';
import CalendlyPopupWidget from './components/CalendlyPopupWidget';
import Meetup from './components/Meetup';
import SliderGallery2 from './components/SliderGallery2';
import SliderGallery3 from './components/SliderGallery3';
import FixedButton from './components/FixedButton';

function App() {
  return (
    <div className="App">
      <FixedButton/>
      <Navbar/>  
      <Banner/>
      <SliderGallery1/>
      <QuickFacts/>
      <SliderGallery2/>
      <TourInformation/>
      <Meetup/>
      <SliderGallery3/>
      <CommentsList/>
      <Footer/>
    </div>
  )
}

export default App;
