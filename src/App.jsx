import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Destination from './components/pages/Destination';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import Login from './components/pages/Login';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/services/activity' element={<Destination />} />
        </Routes>
      </ScrollToTop>
    </div>
    </BrowserRouter>
  );
}

export default App;
