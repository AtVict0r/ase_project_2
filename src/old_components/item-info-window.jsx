import React from 'react';

const ItemInfoWindow = ({ isOpen, selectedItem, onClose }) => {
  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="modal item-info-window">
      <div className="modal-container">
        <div className="modal-header">
          <h3>{selectedItem?.name}</h3>
          <button onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <img src={selectedItem?.image} alt={selectedItem?.name} />
          <p>{selectedItem?.description}</p>
          {/* Add details like price, features, etc. */}
          {/* Add "Add to Cart" button if applicable */}
        </div>
      </div>
    </div>
  );
};

export default ItemInfoWindow;