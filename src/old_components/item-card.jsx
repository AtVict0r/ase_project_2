import React from 'react';

const ItemCard = ({ item, onOpenModal }) => { // Add onOpenModal prop

  return (
    <div className="product-card">
      <img src={item.image} alt={item.name} />
      <div className="product-info">
        <h4>{item.name}</h4>
        <p>{item.description.slice(0, 100)}</p>
        <button onClick={() => onOpenModal(item)}>Learn More</button>
      </div>
    </div>
  );
};

export default ItemCard;