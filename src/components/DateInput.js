import React, { useEffect, useRef } from 'react';

const DateInput = ({ onDateChange }) => {
  const dateInputRef = useRef(null);

  useEffect(() => {
    const dateInput = dateInputRef.current;

    const todaysDate = new Date();

    const formattedDate = getFormattedDate(todaysDate);

    if (dateInput) {
      dateInput.value = formattedDate;
      onDateChange(formattedDate);
    }
  }, [onDateChange]); 

  const getFormattedDate = (date) => {
    const year = date.getFullYear();

    let month = (date.getMonth() + 1).toString();
    month = month.length === 1 ? '0' + month : month;

    let day = date.getDate().toString();
    day = day.length === 1 ? '0' + day : day;

    return `${year}-${month}-${day}`;
  };

  const handleChange = (e) => {
    onDateChange(e.target.value);
  };

  return (
    <input
      type="date"
      id="pickDate"
      ref={dateInputRef}
      onChange={handleChange}
    />
  );
};

export default DateInput;
