import React, { useEffect, useRef } from 'react';

const DateInput = () => {
  const dateInputRef = useRef(null);

  useEffect(() => {
    const dateInput = dateInputRef.current;

    // Bugünün tarihini al
    const todaysDate = new Date();

    // Tarihi "YYYY-MM-DD" formatına dönüştür
    const formattedDate = getFormattedDate(todaysDate);

    // Tarih input'unun değerini güncelle
    if (dateInput) {
      dateInput.value = formattedDate;
    }
  }, []);

  const getFormattedDate = (date) => {
    const year = date.getFullYear();

    let month = (date.getMonth() + 1).toString();
    month = month.length === 1 ? '0' + month : month;

    let day = date.getDate().toString();
    day = day.length === 1 ? '0' + day : day;

    return `${year}-${month}-${day}`;
  };

  return (
    <input
      type="date"
      id="pickDate"
      ref={dateInputRef}
    />
  );
};

export default DateInput;
