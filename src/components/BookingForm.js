import { useState } from "react";
import React from 'react';

function BookingForm(props) {

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  }

  const handleChange = (e) => {
    setDate(e); // Use setDate to update the date state
    props.dispatch(e);
  }

  return (
    <>
      <form
        style={{ display: 'grid', maxWidth: '200px', gap: '20px', margin: '0 auto', padding: '30px 0' }}
        onSubmit={handleSubmit}>
        <h2>Book Now</h2>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={(e) => handleChange(e.target.value)} required/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={e => setTime(e.target.value)} required>
          <option value="" disabled>Choose a time</option>
          {props.availableTimes.availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(parseInt(e.target.value, 10))} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <input disabled={!date} className='button' type="submit" aria-label="On Click" value="Make Your reservation" />
      </form>
    </>
  );
}

export default BookingForm;
