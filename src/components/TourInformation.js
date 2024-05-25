import React from 'react';
import imgg from '../assets/images/tour-info-img-1.jpg'

function TourInformation(){
    return(
        <div className="tour-information-container">
            <div className="tour-information-item">
                <img src={imgg} alt='abc'></img>
                <p>asbdhbahdbashjdbaj asbdhbahdbashjdbaj asbdhbahdbashjdbaj asbdhbahdbashjdbaj</p>
                <button className="readmore-button">Read more</button>
            </div>
        </div>
    )
} 

export default TourInformation;