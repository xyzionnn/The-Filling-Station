import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./ProductModal.css";

function ProductModal({ product, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  if (!product) return null;

  const handleIncrease = () => setQuantity((q) => q + 1);
  const handleDecrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>

        <div className="modal-body">
          <img src={product.image} alt={product.name} className="modal-img" />

          <div className="modal-details">
            <h2>{product.name}</h2>
            <p className="modal-description">{product.description}</p>
            <p className="modal-price">₱{product.price}</p>

            <div className="quantity-section">
              <button onClick={handleDecrease} className="qty-btn">−</button>
              <span className="qty-value">{quantity}</span>
              <button onClick={handleIncrease} className="qty-btn">+</button>
            </div>

            <button className="order-btn" onClick={handleAddToCart}>
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
