import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    // Update if already exists
    const existing = cartItems.find(i => i.id === item.id);
    if (existing) {
      setCartItems(cartItems.map(i =>
        i.id === item.id
          ? {
              ...i,
              roomsBooked: i.roomsBooked + item.roomsBooked,
              totalPrice: (i.roomsBooked + item.roomsBooked) * i.pricePerNight
            }
          : i
      ));
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
