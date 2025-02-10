import React, { useState, useEffect } from 'react';
import './menu.scss';

function Menu() {
  const [pizzas, setPizzas] = useState([]);
  const [burgers, setBurgers] = useState([]);
  const [pastas, setPastas] = useState([]);
  const [editIndex, setEditIndex] = useState({ type: null, index: null });

  const API_URL = 'http://localhost/backend/menu-api.php';

  useEffect(() => {
    fetchItems('pizza', setPizzas);
    fetchItems('burger', setBurgers);
    fetchItems('pasta', setPastas);
  }, []);

  const fetchItems = async (type, setState) => {
    try {
      const response = await fetch(`${API_URL}?type=${type}`);
      const result = await response.json();
      if (result.status === 'success') {
        setState(result.data);
      } else {
        console.error(`Error fetching ${type}:`, result.message);
      }
    } catch (error) {
      console.error(`Error fetching ${type}:`, error);
    }
  };

  const handleEditMode = (type, index) => {
    setEditIndex({ type, index });
  };

  const handleSave = async (type, index) => {
    const item = getItemByType(type, index);
    try {
      const response = await fetch(API_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, id: item.id, ...item }),
      });
      const result = await response.json();
      if (result.status === 'success') {
        setEditIndex({ type: null, index: null });
        fetchItems(type, getSetStateFunction(type));
      } else {
        console.error(`Error saving ${type}:`, result.message);
      }
    } catch (error) {
      console.error(`Error saving ${type}:`, error);
    }
  };

  const handleChange = (type, index, field, value) => {
    const setState = getSetStateFunction(type);
    const items = getItemsByType(type);
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setState(updatedItems);
  };

  const handleDelete = async (type, index) => {
    const item = getItemByType(type, index);
    try {
      const response = await fetch(API_URL, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, id: item.id }),
      });
      const result = await response.json();
      if (result.status === 'success') {
        fetchItems(type, getSetStateFunction(type));
      } else {
        console.error(`Error deleting ${type}:`, result.message);
      }
    } catch (error) {
      console.error(`Error deleting ${type}:`, error);
    }
  };

  const handleAddItem = async (type) => {
    const newItem = getDefaultItem(type);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, ...newItem }),
      });
      const result = await response.json();
      if (result.status === 'success') {
        fetchItems(type, getSetStateFunction(type));
      } else {
        console.error(`Error adding ${type}:`, result.message);
      }
    } catch (error) {
      console.error(`Error adding ${type}:`, error);
    }
  };

  const getDefaultItem = (type) => {
    if (type === 'pizza') {
      return { name: 'New Pizza', description: 'A delicious new pizza!', price: '12.99', image: '/images/pizza-pepperoni.jpg' };
    }
    if (type === 'burger') {
      return { name: 'New Burger', description: 'A tasty new burger!', price: '8.99', image: '/images/burger-chicken.jpg' };
    }
    if (type === 'pasta') {
      return { name: 'New Pasta', description: 'A savory new pasta!', price: '10.99', image: '/images/pasta-macaroni.jpg' };
    }
    return {};
  };

  const getItemsByType = (type) => {
    if (type === 'pizza') return pizzas;
    if (type === 'burger') return burgers;
    if (type === 'pasta') return pastas;
    return [];
  };

  const getSetStateFunction = (type) => {
    if (type === 'pizza') return setPizzas;
    if (type === 'burger') return setBurgers;
    if (type === 'pasta') return setPastas;
    return () => {};
  };

  const getItemByType = (type, index) => getItemsByType(type)[index];

  const renderItems = (type, items) => (
    <section className="menu-category">
      <h2>{type.charAt(0).toUpperCase() + type.slice(1)}s</h2>
      <hr />
      <button className="add-btn" onClick={() => handleAddItem(type)}>Add {type.charAt(0).toUpperCase() + type.slice(1)}</button>
      <div className="menu-items">
        {items.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <div className="menu-item-details">
              {editIndex.type === type && editIndex.index === index ? (
                <>
                  <input type="text" value={item.name} onChange={(e) => handleChange(type, index, 'name', e.target.value)} />
                  <textarea value={item.description} onChange={(e) => handleChange(type, index, 'description', e.target.value)}></textarea>
                  <input type="number" value={item.price} onChange={(e) => handleChange(type, index, 'price', e.target.value)} className="menu-item-price" />
                  <button className="save-btn" onClick={() => handleSave(type, index)}>Save</button>
                </>
              ) : (
                <>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p className="menu-item-price">${item.price}</p>
                  <button className="edit-btn" onClick={() => handleEditMode(type, index)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(type, index)}>Delete</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="menus">
      {renderItems('pizza', pizzas)}
      {renderItems('burger', burgers)}
      {renderItems('pasta', pastas)}
    </div>
  );
}

export default Menu;
