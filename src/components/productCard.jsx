import React, { useState } from 'react';
import Modal from "./modal.js";
import ProductCardInfo from './productCardInfo.jsx';

function ProductCard({ item }) {
  const [showProductInfo, setShowProductInfo] = useState(false);

  const handleAddToCartClick = () => {
    setShowProductInfo(true);
  };

  const handleClose = () => {
    setShowProductInfo(false);
  };

  return (
    <>
      <div className="product-card">
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <button
          className="add-to-cart"
          onClick={handleAddToCartClick}
        >Add to Cart</button>
      </div>
      <Modal isOpen={showProductInfo} onClose={handleClose}>
        <ProductCardInfo product={item}/>
      </Modal>
    </>
  );
};

export default ProductCard;