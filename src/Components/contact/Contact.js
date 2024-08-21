import React from 'react';
import './contact.scss';
import gofoodLogo from '../../Assets/images/gofood.jpg'; // Pastikan Anda memiliki file logo
import grabfoodLogo from '../../Assets/images/grabfood.jpg'; // Pastikan Anda memiliki file logo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram,  } from '@fortawesome/free-brands-svg-icons'; // Untuk WhatsApp dan Instagram
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Untuk telepon dan email

function ContactUs() {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us with any inquiries or reservations!</p>
      <div className="contact-info">
        <p>
          <FontAwesomeIcon icon={faWhatsapp} size='lg' /> <strong>WhatsApp:</strong> +123456789
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} size='lg'/> <strong>Phone:</strong> +987654321
        </p>
        <p>
          <FontAwesomeIcon icon={faInstagram} size='lg'/> <strong>Instagram:</strong> <a href="https://www.instagram.com/yourrestaurant" target="_blank" rel="noopener noreferrer">@bellacucina</a>
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} size='lg'/> <strong>Email:</strong> info@bellacucina.com
        </p>
      </div>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
      <div className="additional-buttons">
        <div className="order-now">
          <h2>Order Now</h2>
          <a href="https://gofood.co.id/en" target="_blank" rel="noopener noreferrer">
            <img src={gofoodLogo} alt="GoFood" className="food-logo" />
          </a>
          <a href="https://food.grab.com/id/id/" target="_blank" rel="noopener noreferrer">
            <img src={grabfoodLogo} alt="GrabFood" className="food-logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
