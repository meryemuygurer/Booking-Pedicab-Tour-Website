import React, { useState } from 'react';
import Pictures3 from '../Pictures3';
function SliderGallery3() {
    
    const [activeIndex, setActiveIndex ] = useState(null)

    const handleClick = (index) => {
        setActiveIndex(index)
    }

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % Pictures3.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + Pictures3.length) % Pictures3.length);
    };

    const handleClose = () => {
        setActiveIndex(null);
    };

    return (
        <div className="slider">
            <p className='slider-p '>Our City Tour lets you experience the Sights and Sounds of New York City and fall in love with it...</p>
            {Pictures3.map((picture, index) => (
                <div className={`slider-item ${index === activeIndex ? 'slider-item-active' : ''} `} key={index}>
                    <img className={`${activeIndex === index ? "bigger-img" : activeIndex === null ? "slider-img" : "hidden"}`}  src={picture.src} alt={picture.alt} onClick={() => handleClick(index)} />
                </div>
            ))}
            {activeIndex !== null && (
                <div className="slider-controls">
                    <button className="close-btn" onClick={handleClose}>&times;</button>
                    <button className="prev-btn" onClick={handlePrev}>&#11013;</button>
                    <button className="next-btn" onClick={handleNext}>&#11013;</button>
                </div>
            )}
        </div>
    );
}

export default SliderGallery3;
