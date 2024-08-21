import React from 'react';
import menuData from '../data/Data';
import './menu.scss';

function Menu() {
  return (
    <div className="menu">
      <section className="menu-category">
        <h2>Pizzas</h2>
        <div className="menu-items">
          {menuData.pizzas.map((pizza, index) => (
            <div key={index} className="menu-item">
              <img src={pizza.image} alt={pizza.name} className="menu-item-image" />
              <div className="menu-item-details">
                <h3 className="menu-item-name">{pizza.name}</h3>
                <p className="menu-item-description">{pizza.description}</p>
                <p className="menu-item-price">{pizza.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="menu-category">
        <h2>Burgers</h2>
        <div className="menu-items">
          {menuData.burgers.map((burger, index) => (
            <div key={index} className="menu-item">
              <img src={burger.image} alt={burger.name} className="menu-item-image" />
              <div className="menu-item-details">
                <h3 className="menu-item-name">{burger.name}</h3>
                <p className="menu-item-description">{burger.description}</p>
                <p className="menu-item-price">{burger.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="menu-category">
        <h2>Pastas</h2>
        <div className="menu-items">
          {menuData.pastas.map((pasta, index) => (
            <div key={index} className="menu-item">
              <img src={pasta.image} alt={pasta.name} className="menu-item-image" />
              <div className="menu-item-details">
                <h3 className="menu-item-name">{pasta.name}</h3>
                <p className="menu-item-description">{pasta.description}</p>
                <p className="menu-item-price">{pasta.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Menu;
