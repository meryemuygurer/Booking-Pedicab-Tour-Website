import React from "react";

function BookingSection(){
    return(
        <div className="booking-section-container">
            <div className="booking-section-element">
                <span>Select an option</span>
                <select className="tour-options-select" name="fruit">
                    <option value="" disabled selected hidden>Tour Options</option>
                    <option value="banana">Central Park 1 Hour Tour</option>
                    <option value="cherry">Central Park 1.5 Hour Tour</option>
                    <option value="date">New York City Tour</option>
                </select>
            </div>
            <div className="booking-section-element">
                <span>Select a month</span>
                <select className="months-select">
                    <option value="" disabled selected hidden >Select A Month</option>
                    <option value="Jan">January</option>
                    <option value="Feb">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="Jun">Jun</option>
                </select>
            </div>
            <div className="booking-section-element">
                <span>Enter Number Of People</span>
                <input type="number" placeholder="Enter Number Of People"></input>
            </div>
        </div>
    )
}

export default BookingSection;