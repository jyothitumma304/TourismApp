// src/pages/EventDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import eventsData from '../data/eventsData';
import './EventDetail.css';

const EventDetail = () => {
  const { id } = useParams();
  const event = eventsData.find((e) => e.id.toString() === id);

  if (!event) {
    return <h2 className="event-not-found">Event not found</h2>;
  }

  return (
    <div className="event-detail-container">
      <h2 className="event-title">{event.event}</h2>
      <img className="event-image" src={event.image} alt={event.event} />
      <p className="event-city"><strong>City:</strong> {event.city}</p>
      <p className="event-date"><strong>Date:</strong> {event.date}</p>
      <p className="event-description">{event.description}</p>
    </div>
  );
};

export default EventDetail;
