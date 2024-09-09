import React from 'react';
import './description.scss';

const Description = () => {
  return (
    <div className="description-container">
      <hr />
      <h2>About Our Restaurant</h2>
      <div className="full-screen-image">
      </div>
      <p>
        Welcome to our restaurant, where we serve delicious Italian cuisine made from the freshest ingredients. 
        Our chefs are passionate about delivering the best dining experience, with a menu that features a variety 
        of classic dishes, including handmade pasta, wood-fired pizzas, and delectable desserts. 
        Join us for a meal that will transport you to the heart of Italy!
      </p>
      <div className="gallery">
        <div className="gambaran">
          <img src="/images/about1.jpg" alt="1" />
        </div>
        <div className="gambaran">
          <img src="/images/about2.jpg" alt="2" />
        </div>
        <div className="gambaran">
          <img src="/images/about3.jpg" alt="3" />
        </div>
        <div className="gambaran">
          <img src="/images/about4.jpeg" alt="4" />
        </div>
      </div>
    </div>
  );
};

export default Description;
