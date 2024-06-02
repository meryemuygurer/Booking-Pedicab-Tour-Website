import React, { useEffect, useState } from 'react';

const CustomCalendlyButton = () => {
  const [tour, setTour] = useState('');
  const [showFixedButton, setShowFixedButton] = useState(false);

  const tourLinks = {
    tour1: 'https://calendly.com/hmuygurer347/deneme',
    tour2: 'https://calendly.com/hmuygurer347/1-5-hour-tour',
    tour3: 'https://calendly.com/hmuygurer347/30min',
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowFixedButton(true);
      } else {
        setShowFixedButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openPopupWidget = (url) => {
    if (url) {
      window.Calendly.initPopupWidget({ url });
    } else {
      alert('Please select a tour');
    }
  };

  const handleBookingClick = () => {
    if (tour) {
      openPopupWidget(tourLinks[tour]);
    } else {
      alert('Please select a tour');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="tour-selection">
        <label>
          Select Tour:
          <select className='select-tour' value={tour} onChange={(e) => setTour(e.target.value)}>
            <option value="" disabled hidden>Select</option>
            <option value="tour1">Tour 1</option>
            <option value="tour2">Tour 2</option>
            <option value="tour3">Tour 3</option>
          </select>
        </label>
      </div>
      <div className="row">
        <div className="button-div">
          <button onClick={handleBookingClick} className="custom-calendly-button">
            Booking
          </button>
        </div>
        {showFixedButton && (
          <div className="button-div fixed-button">
            <button onClick={scrollToTop} className="custom-calendly-button">
              Booking
            </button>
          </div>
        )}
      </div>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <style>{`
        .custom-calendly-button {
          color: var(--mainColor);
          letter-spacing: 1px;
          font-weight: bold;
          cursor: pointer;
          border: none;
          outline: none;
          background-color: transparent;
          font-size: 15px;
          z-index: 1;
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
          width: 120px;
          height: 50px;
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

        .row {
          display: flex;
        }

        .fixed-button {
          position: fixed;
          bottom: 20px;
          right: 20px;
        }

        .tour-selection {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default CustomCalendlyButton;
