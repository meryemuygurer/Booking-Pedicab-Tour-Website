import React from 'react';
import imgg from '../assets/images/tour-info-img-1.jpg'
import ExpandableText from './ExpandableText';

function TourInformation(){
    const maxLength = 100;
    const fullText = "Central Park is absolutely beautiful and this one hour “3 Stop” tour takes you through the very southern end of Central Park (the 1.71 mile lower loop) where the main attractions are. You'll have an amazing time while we tell you about the parks history and take beautiful pictures of you so you don't have to take selfies."
    return(
        <>
            <h2 className='tour-information-header'>OUR TOUR DESCRIPTIONS</h2>
            <div className="tour-information-container">
                <div className="tour-information-item">
                    <img src={imgg} alt='abc'></img>
                    <p>Central Park • 1 Hour Pedicab Tour (3 Stops)</p>
                    <p>$80.00</p>
                    <ExpandableText text={fullText} maxLength={maxLength} />
                    <button className="readmore-button">Click For More Info</button>
                </div>
                <div className="tour-information-item">
                    <img src={imgg} alt='abc'></img>
                    <p>Central Park • 1.5 Hour Pedicab Tour (5 Stops) </p>
                    <p>$120.00</p>
                    <p>Great for “Home Alone 2” fans and those that want to take two short beautiful strolls into Central Park’s most lovely and iconic areas with extended photo shoots.</p>
                    <button className="readmore-button">Click For More Info</button>
                </div>
            </div>
        </>
    )
} 

export default TourInformation;