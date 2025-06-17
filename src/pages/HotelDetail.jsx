import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import hotelsData from '../data/hotelsData';
import { useCart } from '../context/CartContext';
import './HotelDetail.css';

const HotelDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const hotel = hotelsData.find(h => h.id.toString() === id);
  const [roomCount, setRoomCount] = useState(1);

  if (!hotel) return <h2>Hotel not found</h2>;

  const handleAddToCart = () => {
    if (roomCount > hotel.roomsAvailable) {
      alert("Not enough rooms available.");
      return;
    }
    addToCart({
      ...hotel,
      roomsBooked: roomCount,
      totalPrice: roomCount * hotel.pricePerNight
    });
    alert(`${roomCount} room(s) at ${hotel.name} added to cart!`);
  };

  return (
    <div className="hotel-detail-container">
      <h2 className="hotel-title">{hotel.name}</h2>
      <img src={hotel.image} alt={hotel.name} className="hotel-image" />
      <p><strong>Location:</strong> {hotel.location}</p>
      <p><strong>Description:</strong> {hotel.description}</p>
      <p><strong>Price per Night:</strong> ₹{hotel.pricePerNight}</p>
      <p><strong>Rooms Available:</strong> {hotel.roomsAvailable}</p>
      <label>
        <strong>Number of Rooms:</strong>
        <input
          type="number"
          min="1"
          max={hotel.roomsAvailable}
          value={roomCount}
          onChange={(e) => setRoomCount(parseInt(e.target.value))}
        />
      </label>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default HotelDetail;
