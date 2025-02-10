import React, { useEffect } from 'react';
import './aboutus.scss';
import './testimoni.scss';
import main from '../../Assets/images/aboutus.jpg';
import image1 from '../../Assets/images/image1.jpg'; // Gambar tambahan 1
import image2 from '../../Assets/images/image2.jpg'; // Gambar tambahan 2
import testimoni from '../data/Customer';
import { motion } from 'framer-motion'; // Import Framer Motion

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
        threshold: 0.1
        , // Elemen dianggap terlihat jika 10% dari elemen tersebut terlihat
      }
    );

    const elements = document.querySelectorAll('.testimoni-item');
    elements.forEach(element => observer.observe(element));

    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, []);

  // Variants untuk animasi gambar
  const imageVariants = {
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1 }
  };

  // Variants untuk animasi teks
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay: 0.5 }
  };

  return (
    <div className="about-us">
      <div className="about-us-header">
        {/* Header content here */}
      </div>
      <div className="about-us-content">
        <div className="about-us-images">
          {/* Apply Framer Motion animation to images */}
          <motion.img
            src={main}
            alt="Bella Cucina Restaurant"
            className="main-image"
            initial="initial"
            animate="animate"
            variants={imageVariants}
          />
          <motion.img
            src={image1}
            alt="Gallery"
            className="gallery-image1"
            initial="initial"
            animate="animate"
            variants={imageVariants}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.img
            src={image2}
            alt="Gallery"
            className="gallery-image2"
            initial="initial"
            animate="animate"
            variants={imageVariants}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </div>

        <div className="about-us-text">
          <motion.div
            className="about-us-text1"
            initial="initial"
            animate="animate"
            variants={textVariants}
          >
            <h2>Welcome to Bella Cucina</h2>
            <p>
              At Bella Cucina, we believe in offering the most delightful dining experience. 
              Established in [Year], our restaurant has been serving delicious and fresh meals made from the highest quality ingredients. 
              Our mission is to bring people together with great food and exceptional service.
            </p>
          </motion.div>

          <motion.div
            className="about-us-text2"
            initial="initial"
            animate="animate"
            variants={textVariants}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <h3>Our Story</h3>
            <p>
              The journey of Bella Cucina began with a passion for food and a dream to create a place where people can enjoy a memorable meal with family and friends. 
              Over the years, we have grown and evolved, but our commitment to quality and customer satisfaction remains our top priority.
            </p>
          </motion.div>

          <motion.div
            className="about-us-text3"
            initial="initial"
            animate="animate"
            variants={textVariants}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <h3>Our Values</h3>
            <p>Quality: We use only the freshest ingredients in all our dishes.</p>
            <p>Hospitality: Our team is dedicated to providing a warm and welcoming atmosphere.</p>
            <p>Community: We strive to support local producers and contribute to our community.</p>
            <p>Sustainability: We are committed to environmentally-friendly practices in our kitchen and operations.</p>
            <p>Innovation: Our menu features creative dishes that blend traditional flavors with modern techniques.</p>
          </motion.div>
        </div>
      </div>

      {/* TESTIMONI START */}
      <section className="testimoni">
        <h2>Testimonials From Our Clients</h2>
        <div className="testimoni-container">
          {testimoni.map((item, index) => (
            <motion.div
              className="testimoni-item animate-on-scroll"
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <img src={item.image} alt={item.name} className="client-image" />
              <div className="testimoni-content">
                <p>"{item.text}"</p>
                <p className="client-name">{item.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
/* TESTIMONI END */
/* ABOUT END */

export default AboutUs;
