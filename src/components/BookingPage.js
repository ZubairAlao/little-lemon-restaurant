import React from 'react';
import BookingForm from './BookingForm';

function BookingPage(props) {
  return (
    <div>
      <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
    </div>
  );
}

export default BookingPage;
