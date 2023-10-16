// Updated React Component
import React from 'react';
import CallToActionImg from '../assets/lemon-dessert.jpg';

function CallToAction() {
  return (
    <section className="cta-background">
      <div className="cta-container">
        <div className="cta-left">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <button className="btn">Reserve a Table</button>
        </div>
        <div className="cta-right">
          <div className="image-box">
            <img src={CallToActionImg} alt="call to action" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
