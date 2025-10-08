import React, { useState } from 'react';
import '../components/Cart.css';
import { FaTrashAlt, FaTicketAlt } from 'react-icons/fa';

import BreezySipsImg from '../assets/images/sips/BreezySipsCan.png';
import MunchMatesImg from '../assets/images/crates/MunchMatesCrate.png';


const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: 'Breezy Sips - Apple Soda', price: 89, quantity: 2, img: BreezySipsImg},
    { id: 2, name: 'Munch Mates Snack Box', price: 149, quantity: 1, img: MunchMatesImg }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState('');

  const updateQuantity = (id, amount) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + amount) }
        : item
    ));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    setDiscount(0);
    setMessage('');
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountedTotal = (total - discount).toFixed(2);

  // 🎟️ Promo code logic (front-end mock)
  const applyPromo = () => {
    const code = promoCode.trim().toUpperCase();

    if (code === 'RETRO10') {
      setDiscount(total * 0.1);
      setMessage('✨ Promo applied! You got 10% off!');
    } else if (code === 'SODA5') {
      setDiscount(5);
      setMessage('🥤 You saved ₱5 on your order!');
    } else {
      setDiscount(0);
      setMessage('❌ Invalid code! Try RETRO10 or SODA5.');
    }
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is feeling lonely... Add some goodies!</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.img} alt={item.name} className="cart-img" />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>₱{item.price.toFixed(2)}</p>
                  <div className="cart-quantity">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>
                  <FaTrashAlt />
                </button>
              </div>
            ))}
          </div>

          {/* 🎟️ Promo Code Section */}
          <div className="promo-section">
            <FaTicketAlt className="promo-icon" />
            <input
              type="text"
              placeholder="Enter Promo Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button onClick={applyPromo} className="apply-btn">Apply</button>
          </div>
          {message && <p className="promo-message">{message}</p>}

          {/* 💸 Summary */}
          <div className="cart-summary">
            <h3>Subtotal: ₱{total.toFixed(2)}</h3>
            {discount > 0 && <h3 className="discount-text">Discount: -₱{discount.toFixed(2)}</h3>}
            <h2>Total: ₱{discountedTotal}</h2>

            <button className="checkout-btn">Proceed to Checkout</button>
            <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
