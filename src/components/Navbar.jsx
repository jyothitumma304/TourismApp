import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useCart } from '../context/CartContext'; // ✅ Import cart context

const Navbar = () => {
  const { cartItems } = useCart(); // ✅ Get cart item count

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">AP Tourism</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/Cultural Events">Cultural Events</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/hotels">Hotel Accommodations</Link></li>
        <li>
          <Link to="/cart" className="cart-link">
            🛒 Cart ({cartItems.length})
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
