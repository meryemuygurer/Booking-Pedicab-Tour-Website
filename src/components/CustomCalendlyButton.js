import React, { useState } from 'react';

const CustomCalendlyButton = () => {
  const [tour, setTour] = useState('');

  const tourLinks = {
    tour1: 'https://calendly.com/hmuygurer347/deneme',
    tour2: 'https://calendly.com/hmuygurer347/1-5-hour-tour',
    tour3: 'https://calendly.com/hmuygurer347/30min',
  };

  const openPopupWidget = () => {
    const url = tourLinks[tour];
    if (url) {
      window.Calendly.initPopupWidget({ url });
    } else {
      console.error('Please select a tour');
    }
  };

  return (
    <div>
      <div className="tour-selection">
        <label>
          Select Tour:
          <select value={tour} onChange={(e) => setTour(e.target.value)}>
            <option value="">Select</option>
            <option value="tour1">Tour 1</option>
            <option value="tour2">Tour 2</option>
            <option value="tour3">Tour 3</option>
          </select>
        </label>
      </div>
      <div className="button-div">
        <button onClick={openPopupWidget} className="custom-calendly-button">
          Booking
        </button>
      </div>
      <style>{`
        .custom-calendly-button {
          background-color: none;
          color: #c90005;
          border: none;
          border-radius: 5px;
          position: relative;
          z-index: 1;
          letter-spacing: 1px;
          font-weight: bold;
          cursor: pointer;
          outline: none;
          background-color: transparent;
          font-size: 15px;
        }
        .custom-calendly-button:hover {
          background-color: #c90005;
          color: #ffffff;
        }
        .button-div {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 6px 12px;
          background-color: var(--mainColor);
          text-align: center;
          font-size: 16px;
          border: 2px solid var(--mainColor);
          border-radius: 5px;
          overflow: hidden;
          position: relative;
          transition: color 0.4s, background-color 0.4s;
          cursor: pointer;
        }
        .button-div:hover button {
          transition: 1s;
          color: white;
        }
        .button-div::before {
          content: '';
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #ffffff;
          z-index: 0;
          transition: transform 0.4s;
          transform: translateY(-100%);
        }
        .button-div:hover::before {
          transform: translateY(0);
        }
        .tour-selection {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default CustomCalendlyButton;
