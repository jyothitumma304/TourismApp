import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import HotelList from '../components/HotelList';
import places from '../data/placesData';
import PlaceCard from '../components/PlaceCard';

const Dashboard = () => {
  const navigate = useNavigate();
  const featuredPlaces = places.slice(0, 4);

  return (
    <div style={{ backgroundColor: '#f9f9f9' }}>
      <Hero />

      {/* Top Tourist Places */}
      <section style={{ padding: '3rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Top Tourist Places</h2>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '2rem', 
          justifyContent: 'center' 
        }}>
          {featuredPlaces.map(place => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>

        <div style={{ marginTop: '2rem' }}>
          <button
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              backgroundColor: '#1e40af',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            }}
            onClick={() => navigate('/places')}
          >
            Visit Tourist Places
          </button>
        </div>
      </section>

      {/* Hotel Accommodations */}
      <section style={{ padding: '3rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Hotel Accommodation</h2>
        <HotelList />
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
