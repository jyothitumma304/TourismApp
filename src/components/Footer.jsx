import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-about">
          <h3>About AP Tourism</h3>
          <p>Promoting culture, nature, and heritage across Andhra Pradesh through immersive travel experiences.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/cultural-events">Cultural Events</a></li>
            <li><a href="/hotels">Hotel Accommodations</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Signup</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@aptourism.com</p>
          <p>Phone: +91 6301109669</p>
          <p>Address: Vijayawada, Andhra Pradesh, India</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AP Tourism. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
