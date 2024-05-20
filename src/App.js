import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import SliderGallery from './components/SliderGallery';
import CommentsList from './components/CommentsList';

function App() {
  return (
    <div className="App">
      <Navbar/>  
      <Banner/>
      <SliderGallery/>
      <CommentsList/>
    </div>
  )
}

export default App;
