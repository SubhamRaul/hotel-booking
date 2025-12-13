import React from 'react'
import Navbar from './components/navbar'
import {Route, Routes, useLocation} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx';
import Allroom from './pages/Allroom.jsx';
import RoomDetails from './pages/RoomDetails.jsx';
import MyBookings from './pages/MyBookings.jsx';

function App() {


  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Allroom />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
