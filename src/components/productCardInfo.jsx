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

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity < 1000 ? prevQuantity + 1 : 999);
    };

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1);
    };

    return (
        <div className="product-info">
            <h2>{product.title}</h2>
            <div className="product-description">
                <div className="description-text">
                    <p>Price: ${product.price}</p>
                    <p>SKU: {product.sku}</p>
                    <p>Brand: {product.brand}</p>
                    <p>Category: {product.category}</p>
                    <p>Tags: {product.tags.join(', ')}</p>
                </div>
                <img src={product.image} alt={product.title} />
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
                    <div className='product-quantity'>
                        <button type="button" onClick={decreaseQuantity} disabled={!product.inStock || quantity === 1}>-</button>
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
                        <button type="button" onClick={increaseQuantity} disabled={!product.inStock || quantity === 999}>+</button>
                    </div>
                </label>
                <p>Total: ${(product.price * quantity).toFixed(2)}</p>
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