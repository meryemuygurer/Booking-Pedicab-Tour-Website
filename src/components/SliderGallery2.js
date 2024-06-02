import React, { useState } from 'react';
import Pictures2 from '../Pictures2';
function SliderGallery2() {
    
    const [activeIndex, setActiveIndex ] = useState(null)

    const handleClick = (index) => {
        setActiveIndex(index)
    }

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % Pictures2.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + Pictures2.length) % Pictures2.length);
    };

    const handleClose = () => {
        setActiveIndex(null);
    };

    return (
        <div className="slider">
            <p className='slider-p '>Our Central Park Tours Are Perfect For Kids Of All Ages...</p>
            {Pictures2.map((picture, index) => (
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

export default SliderGallery2;
