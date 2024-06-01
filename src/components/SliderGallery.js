import React, { useState } from 'react';
import Pictures1 from '../Pictures1';
function SliderGallery() {
    
    const [activeIndex, setActiveIndex ] = useState(null)

    const handleClick = (index) => {
        setActiveIndex(index)
    }

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % Pictures1.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + Pictures1.length) % Pictures1.length);
    };

    const handleClose = () => {
        setActiveIndex(null);
    };

    return (
        <div className="slider">
            <p className='slider-p '>Discover The Magic Of Central Park</p>
            {Pictures1.map((picture, index) => (
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

export default SliderGallery;
