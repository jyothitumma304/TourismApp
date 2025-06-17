import React, { useState } from 'react';
import places from '../data/placesData';

const AllPlaces = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter logic based on title or description
  const filteredPlaces = places.filter(place =>
    place.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    place.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        Explore Tourist Places in Andhra Pradesh
      </h2>

      {/* Search Input */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Search places..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{
            width: '300px',
            padding: '10px',
            fontSize: '16px',
            borderRadius: '8px',
            border: '1px solid #ccc'
          }}
        />
      </div>

      {/* Places Grid */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center'
      }}>
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((place) => (
            <div
              key={place.id}
              style={{
                width: '250px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                background: '#fff'
              }}
            >
              <img
                src={place.image}
                alt={place.title}
                style={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '1rem' }}>
                <h3 style={{ marginBottom: '0.5rem', color: '#1e40af' }}>{place.title}</h3>
                <p>{place.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p style={{ fontSize: '18px', color: '#999' }}>No places found.</p>
        )}
      </div>
    </div>
  );
};

export default AllPlaces;
