import React from "react";
import DateInput from "./DateInput";

function BookingSection(){
    return(
        <div className="booking-section-container">
            <div className="booking-section-element">
                <select className="tour-options-select" name="fruit">
                    <option value="" disabled selected hidden>Select A Tour Option</option>
                    <option value="banana">Central Park 1 Hour Tour</option>
                    <option value="cherry">Central Park 1.5 Hour Tour</option>
                    <option value="date">New York City Tour</option>
                </select>
            </div>
            <div className="booking-section-element">
                <DateInput/>
            </div>
            <div className="booking-section-element">
                <input type="number" placeholder="Number Of People"></input>
            </div>
        </div>
    )
}

export default BookingSection;