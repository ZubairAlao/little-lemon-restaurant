import React from 'react';

function BookingForm({ date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, availableTimes }) {

  return (
    <>
    <h2>Book Now</h2>
      <form style={{ display: 'grid', maxWidth: '200px', gap: '20px', margin: '0 auto', }}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={e => setDate(e.target.value)} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={e => setTime(e.target.value)}>
          {availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(parseInt(e.target.value, 10))} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input className='button' type="submit" value="Make Your reservation" />
      </form>
    </>
  );
}

export default BookingForm;

