// src/components/EventList.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import eventsData from '../data/eventsData';
import './EventList.css';

const EventList = () => {
  const [searchCity, setSearchCity] = useState('');

  const filteredEvents = eventsData.filter((event) =>
    event.city.toLowerCase().includes(searchCity.toLowerCase())
  );

  return (
    <div className="events-container">
      <h2>Cultural Events</h2>
      <input
        type="text"
        placeholder="Search by city (e.g., Vijayawada)"
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        className="search-input"
      />

      <div className="events-grid">
        {filteredEvents.map((event) => (
          <Link to={`/events/${event.id}`} key={event.id} className="event-card-link">
            <div className="event-card">
              <img src={event.image} alt={event.event} />
              <h3>{event.event}</h3>
              <p><strong>City:</strong> {event.city}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventList;
