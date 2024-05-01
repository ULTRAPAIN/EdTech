
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login';
import {Routes ,Route } from 'react-router-dom';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';
function App() {
  const [isloggedin,setisloggedin] =useState(false);
  return (
    <div className="flex flex-col w-screen h-screen">
      <Navbar isloggedin={isloggedin} setisloggedin={setisloggedin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={
          <PrivateRoute isloggedin={isloggedin}>
            <Dashboard/>
          </PrivateRoute>
        } />
        <Route path="/signup" element={<Signup setisloggedin={setisloggedin}/>} />
        <Route path="/login" element={<Login  setisloggedin={setisloggedin}/>} />
        <Route path="*" element={<div className='flex items-center justify-center h-screen text-3xl font-semibold text-white'>No Page Found</div>} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div> 
  );
}

export default App;
