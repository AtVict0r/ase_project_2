import React from 'react';

function ProductCard({ items }) {
    return (
      <div className="product-card">
        <img src={items.image} alt={items.title} />
        <h3>{items.title}</h3>
        <p>{items.description}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    );
  };

export default ProductCard;