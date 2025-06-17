import React from 'react';
import { useCart } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-grid">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.location}</p>
              <p><strong>Rooms Booked:</strong> {item.roomsBooked}</p>
              <p><strong>Total Price:</strong> ₹{item.totalPrice}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
