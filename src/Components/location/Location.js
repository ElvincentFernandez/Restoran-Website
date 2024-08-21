import React from 'react';
import './location.scss'; // Styling khusus untuk Location component
import downtownImage from '../../Assets/images/downtown-branch.jpg';
import uptownImage from '../../Assets/images/uptown-branch.jpg';
import suburbImage from '../../Assets/images/suburb-branch.jpg';
import northsideImage from '../../Assets/images/northside-cafe.jpg';
import eastsideImage from '../../Assets/images/eastside-bistro.jpg';

function Location() {
  return (
    <div className="location">
      <div className="location-header">
      </div>
      <div className="location-content">
        <div className="location-item">
          <img 
            src= {downtownImage}
            alt="Downtown Branch" 
            className="location-image" 
          />
          <div className="location-details">
            <h2>Downtown Branch</h2>
            <p>123 Main Street, Downtown City</p>
            <p>Phone: (123) 456-7890</p>
            <a 
              href="https://www.google.com/maps/place/123+Main+Street,+Downtown+City" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </div>
        </div>
        <div className="location-item">
          <img 
            src={uptownImage}
            alt="Uptown Branch" 
            className="location-image" 
          />
          <div className="location-details">
            <h2>Uptown Branch</h2>
            <p>456 Elm Street, Uptown City</p>
            <p>Phone: (234) 567-8901</p>
            <a 
              href="https://www.google.com/maps/place/456+Elm+Street,+Uptown+City" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </div>
        </div>
        <div className="location-item">
          <img 
            src={suburbImage}
            alt="Suburb Branch" 
            className="location-image" 
          />
          <div className="location-details">
            <h2>Suburb Branch</h2>
            <p>789 Oak Street, Suburb City</p>
            <p>Phone: (345) 678-9012</p>
            <a 
              href="https://www.google.com/maps/place/789+Oak+Street,+Suburb+City" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </div>
        </div>
        <div className="location-item">
          <img 
            src={northsideImage}
            alt="Northside Café" 
            className="location-image" 
          />
          <div className="location-details">
            <h2>Northside Café</h2>
            <p>101 Maple Avenue, Northside City</p>
            <p>Phone: (456) 789-0123</p>
            <a 
              href="https://www.google.com/maps/place/101+Maple+Avenue,+Northside+City" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </div>
        </div>
        <div className="location-item">
          <img 
            src={eastsideImage}
            alt="Eastside Bistro" 
            className="location-image" 
          />
          <div className="location-details">
            <h2>Eastside Bistro</h2>
            <p>202 Birch Road, Eastside City</p>
            <p>Phone: (567) 890-1234</p>
            <a 
              href="https://www.google.com/maps/place/202+Birch+Road,+Eastside+City" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
