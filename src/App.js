import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import SliderGallery from './components/SliderGallery';
import CommentsList from './components/CommentsList';
import TourInformation from './components/TourInformation';
import QuickFacts from './components/QuickFacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>  
      <Banner/>
      <SliderGallery/>
      <QuickFacts/>
      <TourInformation/>
      <CommentsList/>
      <Footer/>
    </div>
  )
}

export default App;
