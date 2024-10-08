import React, { useRef } from 'react';
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
  const tourInfoRef = useRef(null);
  const aboutUsRef = useRef(null);
  const reviewsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <Navbar
        tourInfoRef={tourInfoRef}
        aboutUsRef={aboutUsRef}
        reviewsRef={reviewsRef}
        contactRef={contactRef}
      />
      <Banner />
      <SliderGallery1 />
      <QuickFacts />
      <SliderGallery2 />
      <div ref={tourInfoRef} style={{ padding: "20px" }}>
        <TourInformation />
      </div>
      <Meetup />
      <SliderGallery3 />
      <div ref={aboutUsRef} style={{ padding: "20px" }}>
        <AboutUs />
      </div>
      <div ref={reviewsRef} style={{ padding: "20px" }}>
        <CommentsList />
      </div>
      <div ref={contactRef} style={{ padding: "20px" }}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
