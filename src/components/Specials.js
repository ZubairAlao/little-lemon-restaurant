import React from 'react';
import greekSalad from '../assets/greek-salad.jpg'
import bruchetta from '../assets/bruchetta.svg'
import lemonDessert from '../assets/lemon-dessert.jpg'

const specialList = [
  {
    image: greekSalad,
    title: 'Greek Salad',
    price: '$12.99',
    description:
      'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.',
    order: 'Order a delivery',
  },
  {
    image: bruchetta,
    title: 'Bruschetta',
    price: '$5.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.',
    order: 'Order a delivery',
  },
  {
    image: lemonDessert,
    title: 'Lemon Dessert',
    price: '$5.00',
    description:
      "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
    order: 'Order a delivery',
  },
];

function Specials() {
  return (
    <div className='special-container'>
      <div className='special-heading'>
        <h3>Specials</h3>
        <h4>Online Menu</h4>
      </div>

      <div className="specials-grid">
        {specialList.map((special, index) => (
          <div key={index} className="special-card">
            <img src={special.image} alt={special.title} />
            <div className="special-details">
              <h4>{special.title}</h4>
              <p>{special.description}</p>
              <button>{special.order}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Specials;
