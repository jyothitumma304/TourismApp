// src/pages/HotelPage.jsx
import React from 'react';
import HotelList from '../components/HotelList';


const HotelPage = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Hotel Accommodations</h1>
      <HotelList />
    </div>
  );
};

export default HotelPage;
