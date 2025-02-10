import React from 'react';
import './gallery.scss';
import facilities from "../data/Facilities"

function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery-items">
        {facilities.map(facility => (
          <div key={facility.id} className="gallery-item"> {/* Gunakan facility.id sebagai key */}
            <img src={facility.image} alt={facility.title} className="gallery-image" />
            <div className="gallery-info">
              <h2 className="gallery-item-title">{facility.title}</h2>
              <p className="gallery-item-description">{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
