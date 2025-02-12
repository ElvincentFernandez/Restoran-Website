import React, { useState } from 'react';
import './contact.scss';
import gofoodLogo from '../../Assets/images/gofood.jpg';
import grabfoodLogo from '../../Assets/images/grabfood.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ContactUs() {
  // State untuk menyimpan input form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Menangani perubahan input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Mengirim data ke backend saat form dikirim
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/backend/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      alert(result.message); // Menampilkan pesan dari server

      // Reset form setelah pengiriman berhasil
      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us with any inquiries or reservations!</p>
      <div className="contact-info">
        <p>
          <FontAwesomeIcon icon={faWhatsapp} size="lg" /> <strong>WhatsApp:</strong> +123456789
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} size="lg" /> <strong>Phone:</strong> +987654321
        </p>
        <p>
          <FontAwesomeIcon icon={faInstagram} size="lg" /> <strong>Instagram:</strong>{' '}
          <a href="https://www.instagram.com/yourrestaurant" target="_blank" rel="noopener noreferrer">@bellacucina</a>
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} size="lg" /> <strong>Email:</strong> info@bellacucina.com
        </p>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
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
