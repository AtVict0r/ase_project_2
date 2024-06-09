import React, { useState } from 'react';

const ProductCardInfo = ({ product }) => {
    const [color, setColor] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [message, setMessage] = useState('');

    const handleBuy = () => {
        setMessage(`<p>You have purchased <strong>${quantity} ${color} ${product.title}</strong>. Thank you for your purchase!</p>`);
        console.log({
            product: product.title,
            color: color,
            quantity: quantity,
            price: product.price,
            sku: product.sku
        });
    };

    return (
        <div className="product-info">
            <h2>{product.title}</h2>
            <div className="product-description">
                <img src={product.image} alt={product.title} />
                <div className="description-text">
                    <p>Price: ${product.price}</p>
                    <p>SKU: {product.sku}</p>
                    <p>Brand: {product.brand}</p>
                    <p>Category: {product.category}</p>
                    <p>Tags: {product.tags.join(', ')}</p>
                </div>
            </div>
            <p>{product.description}</p>
            <form>
                <label>
                    Color:
                    <select value={color} onChange={e => setColor(e.target.value)} disabled={!product.inStock}>
                        {product.colors.map((color, index) => (
                            <option key={index} value={color}>{color}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Quantity:
                    <input
                        type="number"
                        value={quantity}
                        onChange={e =>
                            setQuantity(() => {
                                if (parseInt(e.target.value) < parseInt(e.target.min)) {
                                    return parseInt(e.target.min);
                                } else if (parseInt(e.target.value) > parseInt(e.target.max)) {
                                    return parseInt(e.target.max);
                                }
                                return parseInt(e.target.value);
                            })
                        }
                        min="1"
                        max="999"
                        disabled={!product.inStock}
                    />
                </label>
                <button type="button" className="add-to-cart" onClick={handleBuy} disabled={!product.inStock}>
                    Buy
                </button>
            </form>
            {!product.inStock && <p className="out-of-stock">This product is currently out of stock.</p>}
            {message && <div dangerouslySetInnerHTML={{ __html: message }} />}
        </div>
    );
};

export default ProductCardInfo;