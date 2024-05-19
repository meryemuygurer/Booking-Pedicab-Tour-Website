import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import SliderGallery from './components/SliderGallery';

function App() {
  return (
    <div className="App">
      <Navbar/>  
      <Banner/>
      <SliderGallery/>
    </div>
  )
}

export default App;
