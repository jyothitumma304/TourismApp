import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hotelsData from '../data/hotelsData';
import './HotelList.css';

const HotelList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 4;

  const filteredHotels = hotelsData.filter((hotel) =>
    hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hotel.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredHotels.length / hotelsPerPage);
  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = filteredHotels.slice(indexOfFirstHotel, indexOfLastHotel);

  return (
    <div className="hotel-list">
      <h2>Hotel Accommodations in Andhra Pradesh</h2>
      <input
        type="text"
        placeholder="Search hotels..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setCurrentPage(1);
        }}
        className="search-input"
      />

      <div className="hotel-cards">
        {currentHotels.map((hotel) => (
          <Link to={`/hotels/${hotel.id}`} key={hotel.id} className="hotel-card-link">
            <div className="hotel-card">
              <img src={hotel.image} alt={hotel.name} />
              <h3>{hotel.name}</h3>
            </div>
          </Link>
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => setCurrentPage(p => p - 1)} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => setCurrentPage(p => p + 1)} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default HotelList;
