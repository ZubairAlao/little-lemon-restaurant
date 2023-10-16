import React from 'react';
import ChicagoImg1 from '../assets/restaurant.jpg';
import ChicagoImg2 from '../assets/restaurant.jpg';

function Chicago() {
  return (
    <div className="chicago-container">
      <div>
        <h2>Little Chicago</h2>
        <h4>Chicago</h4>
        <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.</p>
      </div>
      <div className="images">
        <img src={ChicagoImg1} width="300" alt="chicago 1" />
        <img src={ChicagoImg2} width="300" alt="chicago 2" />
      </div>
    </div>
  );
}

export default Chicago;
