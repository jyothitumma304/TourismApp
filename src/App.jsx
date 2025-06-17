// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import CulturalEventsPage from './pages/CulturalEventsPage';
import HotelPage from './pages/HotelPage';
import EventDetail from './pages/EventDetail';
import HotelDetail from './pages/HotelDetail';
import CartPage from './pages/CartPage';
import AllPlaces from './pages/AllPlaces';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Cultural Events" element={<CulturalEventsPage />} />
        <Route path="/hotels"element={<HotelPage />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/Hotels/:id"element={<HotelDetail />} />
        <Route path="/cart"element={<CartPage />} />
        <Route path="/places"element={<AllPlaces />} />

      </Routes>
    </>
  );
}

export default App;
