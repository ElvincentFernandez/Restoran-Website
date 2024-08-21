import React, { useEffect } from 'react';
import './aboutus.scss';
import './testimoni.scss';
import main from '../../Assets/images/aboutus.jpg';
import image1 from '../../Assets/images/image1.jpg'; // Gambar tambahan 1
import image2 from '../../Assets/images/image2.jpg'; // Gambar tambahan 2
import testimoni from '../data/Customer';

/* ABOUT START */
function AboutUs() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Berhenti mengamati setelah animasi berjalan
          }
        });
      },
      {
        threshold: 0.1, // Elemen dianggap terlihat jika 10% dari elemen tersebut terlihat
      }
    );

    const elements = document.querySelectorAll('.testimoni-item');
    elements.forEach(element => observer.observe(element));

    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="about-us">
      <div className="about-us-header">
        {/* Header content here */}
      </div>
      <div className="about-us-content">
        <div className="about-us-images">
          <img src={main} alt="Bella Cucina Restaurant" className="main-image" />
          <img src={image1} alt="Gallery" className="gallery-image1" />
          <img src={image2} alt="Gallery" className="gallery-image2" />
        </div>
        <div className="about-us-text">
          <div className="about-us-text1">
            <h2>Welcome to Bella Cucina</h2>
            <p>
              At Bella Cucina, we believe in offering the most delightful dining experience. 
              Established in [Year], our restaurant has been serving delicious and fresh meals made from the highest quality ingredients. 
              Our mission is to bring people together with great food and exceptional service.
            </p>
          </div>
          <div className="about-us-text2">
            <h3>Our Story</h3>
            <p>
              The journey of Bella Cucina began with a passion for food and a dream to create a place where people can enjoy a memorable meal with family and friends. 
              Over the years, we have grown and evolved, but our commitment to quality and customer satisfaction remains our top priority.
            </p>
          </div>
          <div className="about-us-text3">
            <h3>Our Values</h3>
            <ul>
              <li>Quality: We use only the freshest ingredients in all our dishes.</li>
              <li>Hospitality: Our team is dedicated to providing a warm and welcoming atmosphere.</li>
              <li>Community: We strive to support local producers and contribute to our community.</li>
              <li>Sustainability: We are committed to environmentally-friendly practices in our kitchen and operations.</li>
              <li>Innovation: Our menu features creative dishes that blend traditional flavors with modern techniques.</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="section-divider" />

      {/* TESTIMONI START */}
      <section className="testimoni">
        <h2>Testimonials From Our Clients</h2>
        <div className="testimoni-container">
          {testimoni.map((item, index) => (
            <div className="testimoni-item animate-on-scroll" key={index}>
              <img src={item.image} alt={item.name} className="client-image" />
              <div className="testimoni-content">
                <p>"{item.text}"</p>
                <p className="client-name">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
/* TESTIMONI END */
/* ABOUT END */

export default AboutUs;
