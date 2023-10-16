import React, { useState } from 'react'
import BookingForm from './BookingForm'


function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState([]);
  return (
    <div>
      {/* <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/> */}
      <h1>Hello</h1>
    </div>
  )
}

export default BookingPage