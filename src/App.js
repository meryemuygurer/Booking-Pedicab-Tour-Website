import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import SliderGallery from './components/SliderGallery';
import CommentsList from './components/CommentsList';
import TourInformation from './components/TourInformation';
import QuickFacts from './components/QuickFacts';
import Footer from './components/Footer';
import CalendlyPopupWidget from './components/CalendlyPopupWidget';
import Meetup from './components/Meetup';

function App() {
  return (
    <div className="App">
      <Navbar/>  
      <Banner/>
      <CalendlyPopupWidget/>
      <SliderGallery/>
      <QuickFacts/>
      <TourInformation/>
      <Meetup/>
      <CommentsList/>
      <Footer/>
    </div>
  )
}

export default App;
