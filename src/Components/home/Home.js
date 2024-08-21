import React, { useEffect } from 'react';
import './home.scss';
import Description from './Descrip/Description';
import main from '../../Assets/images/main.avif'; // Pastikan path gambar sesuai dengan struktur folder Anda
import main2 from '../../Assets/images/main2.jpg'; // Pastikan path gambar sesuai dengan struktur folder Anda
import ClientsSection from './Client/Clients';

function Home() {
  useEffect(() => {
    const popUpElements = document.querySelectorAll('.pop-up');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    });

    popUpElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      popUpElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  const handleReservation = () => {
    // Ganti URL dengan halaman atau form reservasi yang sesuai
    window.location.href = 'https://www.example.com/reservation';
  };

  return (
    <div className="home">
      <div className="home-header">
        <div className="home-text pop-up">
          <h1>Welcome to Bella Cucina</h1>
          <p>
            Discover the true taste of Italy at Bella Cucina, where tradition meets elegance.
            Our menu features a delightful array of authentic Italian dishes, from handcrafted pizzas
            to delectable pastas, all prepared with the freshest ingredients.
          </p>
          <p>
            Join us for an unforgettable dining experience, whether you’re here for a special occasion
            or a casual meal with friends and family. At Bella Cucina, we pride ourselves on providing
            exceptional service and an inviting atmosphere.
          </p>
          <p>
            Our chefs are dedicated to crafting each dish with care and passion, using time-honored recipes
            and innovative techniques to create a menu that is both familiar and exciting. From our signature
            wood-fired pizzas to our rich, creamy pasta dishes, every bite is a celebration of Italian culinary
            heritage.
          </p>
        </div>
        <img src={main} alt="Bella Cucina Restaurant" className="home-image right pop-up" />
      </div>
      <div className="home-section">
        <img src={main2} alt="Bella Cucina Restaurant" className="home-image left pop-up" />
        <div className="home-text pop-up">
          <p>
            In addition to our exceptional food and service, Bella Cucina offers a cozy and stylish ambiance
            that sets the perfect stage for your dining experience. Our thoughtfully designed space features
            elegant decor, comfortable seating, and a relaxed atmosphere, making it an ideal choice for
            any occasion.
          </p>
          <p>
            We invite you to explore our menu, experience our hospitality, and indulge in the flavors of Italy
            at Bella Cucina. Thank you for choosing us, and we look forward to serving you soon!
          </p>
          <p>
            The charm of Bella Cucina lies in its blend of traditional Italian aesthetics with modern comforts. 
            Our interior design seamlessly combines rustic Italian elements with contemporary touches, creating a warm and sophisticated setting. 
            The rich textures of our furnishings and the carefully curated artwork on our walls reflect the essence of Italian culture, 
            while our ambient lighting ensures a perfect mood for dining.
          </p>
          <p>
            Our dedicated team is committed to providing an exceptional dining experience, 
            from the moment you walk through our doors until your last bite. 
            The attention to detail in every aspect of our service is aimed at making your visit memorable. 
            We take pride in our personalized approach, where every guest is treated like family, and every meal is crafted with care and passion.
          </p>
            <div className="reserve-btn-container">
              <button className="reserve-btn" onClick={handleReservation}>
                Reserve a Table
              </button>
            </div>
        </div>
      </div>
      
      {/* Import the Description component at the bottom */}
      <Description />
      <ClientsSection />
    </div>
  );
}

export default Home;
