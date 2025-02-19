import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../src/pages/home";
import Login from '../src/pages/login'
import Address from './pages/address';
import '../src/configure/i18n/i18n'
import AddNewAddress from './pages/address/addNewAddress';
import RouteStatus from '../src/pages/routeStatus';
import EditAddress from './pages/address/editAddress';
import UserProfile from './pages/profile';


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/address' element={<Address />} />
          <Route path='/addAddress' element={<AddNewAddress />} />
          <Route path='/routeStatus' element={<RouteStatus />} />
          <Route path='/editAddress' element={<EditAddress />} />
          <Route path='/profile' element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
