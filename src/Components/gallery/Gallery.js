import React from 'react';
import { motion } from 'framer-motion'; // Import motion dari framer-motion
import './gallery.scss';
import facilities from "../data/Facilities";

function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery-items">
        {facilities.map((facility, index) => (
          <motion.div
            key={facility.id}
            className="gallery-item"
            initial={{ opacity: 0, y: 50 }}  // Mulai dari bawah (50px)
            animate={{ opacity: 1, y: 0 }}   // Geser ke posisi normal
            transition={{ duration: 0.5, delay: index * 0.2 }} // Tambahkan delay bertahap
          >
            <img src={facility.image} alt={facility.title} className="gallery-image" />
            <div className="gallery-info">
              <h2 className="gallery-item-title">{facility.title}</h2>
              <p className="gallery-item-description">{facility.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default Gallery;
