import React, { useState, useReducer } from 'react';
import BookingForm from './BookingForm';

function BookingPage() {
  // Define the reducer function to handle state changes
  const timesReducer = (state, action) => {
    if (action.type === 'UPDATE_TIMES') {
      return action.availableTimes;
    }
    return state; // Return the current state if no action matches
  };

  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [availableTimes, dispatch] = useReducer(timesReducer, []);

  // Function to update available times (for now, it returns the same times)
  const updateTimes = (selectedDate) => {
    dispatch({
      type: 'UPDATE_TIMES',
      availableTimes: [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
      ],
    });
  };

  // Initialize available times
  const initializeTimes = () => {
    updateTimes(date);
  };

  return (
    <div>
      <BookingForm
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        guests={guests}
        setGuests={setGuests}
        occasion={occasion}
        setOccasion={setOccasion}
        availableTimes={availableTimes}
      />

      <button onClick={initializeTimes}>Initialize Times</button>
    </div>
  );
}

export default BookingPage;
