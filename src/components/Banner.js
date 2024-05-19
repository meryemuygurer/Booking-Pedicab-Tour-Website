import React from "react";
import BookingButton from "./BookingButton";

const Banner = () => {
    return(
        
        <div className="banner-div">
            <img src="/images/home-page-banner.jpeg" className="banner-img" alt="Banner İmg"></img>
            <div className="banner-text">
                <h2>WELCOME TO</h2>
                <h1>Night Your NYC Guide Pedicab Tours </h1>
                <h2>Experience New York City and Central Park with Native New Yorker Tour Guides All Year Long</h2>
            </div>
            <div className="banner-booking-div">
                <p className="booking-text"> If you would like to book a tour but your start time is unavailable, please contact us so 
                we can book your tour for you.</p>
                <BookingButton/>
            </div>
        </div>
    );
}

export default Banner;