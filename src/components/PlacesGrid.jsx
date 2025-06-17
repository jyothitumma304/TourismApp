import React from 'react';
import './PlacesGrid.css';
import places from '../data/placesData';

const PlacesGrid = () => {
  return (
    <div className="places-grid">
      {places.map(place => (
        <div key={place.id} className="place-card">
          <img src={place.image} alt={place.title} />
          <h2>{place.title}</h2>
          <p>{place.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PlacesGrid;
