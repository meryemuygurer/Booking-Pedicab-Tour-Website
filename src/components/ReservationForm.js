import React, {useState} from "react";
import axios from 'axios'
import DateInput from "./DateInput";

function ReservationForm(){
  const [time, setTime] = useState("");
  const [tourType, setTourType] = useState("");
  const [guests, setGuests] = useState("");

  const timeSlots = [
    '09:00 - 10:00',
    '11:00 - 12:00',
    '13:00 - 14:00',
    '15:00 - 16:00',
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/check-availability", {
        time,
        tourType,
        guests,
      });
      alert(response.data.message);
    } catch (error) {
      console.error("There was an error checking the availability!", error);
    }
  };
    return(
        <form className="booking-section-container" onSubmit={handleSubmit}>
            <div className="booking-section-element">
                <select className="tour-options-select" name="fruit" onChange={(e) => setTourType(e.target.value)}>
                    <option value="" disabled selected hidden>Select A Tour Option</option>
                    <option value="1-hour">Central Park 1 Hour Tour</option>
                    <option value="1.5-hour">Central Park 1.5 Hour Tour</option>
                    <option value="new-york">New York City Tour</option>
                </select>
            </div>
            <div className="booking-section-element">
                <DateInput/>
            </div>
            <div className="booking-section-element">
                <select value={time} onChange={(e) => setTime(e.target.value)} required>
                {timeSlots.map((slot, index) => (
                <option key={index} value={slot}>
                    {slot}
                </option>
        ))}
                </select>
            </div>
            <div className="booking-section-element">
                <input type="number" placeholder="Number Of People"  value={guests} onChange={(e) => setGuests(e.target.value)}></input>
            </div>
        </form>
    )
}

export default ReservationForm;