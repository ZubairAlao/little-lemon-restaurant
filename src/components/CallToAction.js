// Updated React Component
import React from 'react';
import CallToActionImg from '../assets/lemon-dessert.jpg';
import { Link } from 'react-router-dom';

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
          <Link to="/booking-page">
          <button className="btn">Reserve a Table</button>
          </Link>
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
