import React, { useRef, useEffect, useState } from 'react';
import './VideosSection.scss';

const ClientsSection = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Salin nilai ref ke variabel lokal
    const videoElement = videoRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (videoElement) {
            videoElement.play();
          }
        } else {
          setIsVisible(false);
          if (videoElement) {
            videoElement.pause();
          }
        }
      },
      { threshold: 0.5 } // 50% terlihat
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    // Fungsi cleanup
    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <div className="clients-section">
      <hr className="separator" />
      <hr className="separator" />
      <h2 className="clients-title">Clients Preview</h2>
      <p className="clients-description">
        Here is a preview of what our clients have experienced with our services. Watch the videos to see their feedback and testimonials.
      </p>
      <div className={`video-container ${isVisible ? 'video-visible' : ''}`}>
        <video ref={videoRef} width="100%" height="auto" controls muted>
          <source src="./videos/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ClientsSection;
