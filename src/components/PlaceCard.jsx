// src/components/PlaceCard.jsx
import React from 'react';
import './PlaceCard.css'; // Optional for styling

const PlaceCard = ({ place }) => {
  return (
    <div className="place-card">
      <img src={place.image} alt={place.title} className="place-image" />
      <div className="place-content">
        <h3>{place.title}</h3>
        <p>{place.description}</p>
      </div>
    </div>
  );
};

export default PlaceCard;
