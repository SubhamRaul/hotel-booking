import React from 'react'
import Navbar from './components/navbar'
import {Route, Routes, useLocation} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx';
import Allroom from './pages/Allroom.jsx';
import RoomDetails from './pages/RoomDetails.jsx';
import MyBookings from './pages/MyBookings.jsx';
import HotelReg from './components/HotelReg.jsx';
import Layout from './pages/HotelOwnwe/Layout.jsx';
import DashBoard from './pages/HotelOwnwe/DashBoard.jsx';
import AddRoom from './pages/HotelOwnwe/AddRoom.jsx';
import ListRoom from './pages/HotelOwnwe/ListRoom.jsx';

function App() {


  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar/>}
      {false && <HotelReg />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Allroom />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path='/owner' element={<Layout />}>
            <Route index element={<DashBoard />} />
            <Route path='add-room' element={<AddRoom />} />
            <Route path='list-room' element={<ListRoom />} />
          </Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
