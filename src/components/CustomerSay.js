import React from 'react';
import john from "../assets/john.jpg";
import ratings from "../assets/rating.png";
// import profile1 from "../assets/images/profile1.jpg";
// import profile2 from "../assets/images/profile2-copy-0.jpg";
// import profile3 from "../assets/images/profile3.jpg";
// import profile4 from "../assets/images/profile2.jpg";

const reviews = [
  {
    id: 1,
    ratingImg: ratings,
    profileImg: john,
    name: 'John Brou',
    comment: 'Fantastic Restaurant.',
  },
  {
    id: 2,
    ratingImg: ratings,
    profileImg: john,
    name: 'Rash Blruo',
    comment: 'It is a nice place.',
  },
  {
    id: 3,
    ratingImg: ratings,
    profileImg: john,
    name: 'Saolu Poiu',
    comment: 'The best restuarant!',
  },
  {
    id: 4,
    ratingImg: ratings,
    profileImg: john,
    name: 'Mehoi Oius',
    comment: 'It is all about the service.',
  },
];

function CustomerSay() {
  return (
    <div className="testimonials">
      <div className="testimonial-header">
        <h1>Testimonials</h1>
      </div>

      <div className="review-container">
        {reviews.map((review) => (
          <div className="review" key={review.id}>
            <img id="rating" src={review.ratingImg} alt="ratings" />
            <img id="profile" src={review.profileImg} alt="Customer Pic" />
            <h2>{review.name}</h2>
            <p>"{review.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerSay;
