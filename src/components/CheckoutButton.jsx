import React from 'react';
import axios from 'axios';

const CheckoutButton = ({ cartItems }) => {
  const handleCheckout = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/payment/create-checkout-session`, {
        cartItems,
      });

      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error("Error creating checkout session", error);
      alert("Failed to create Stripe session");
    }
  };

  return <button onClick={handleCheckout} className="checkout-button">Proceed to Payment</button>;
};

export default CheckoutButton;
