import logo from './logo.svg';
import './App.css';
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import Tour from './components/Tour/Tour';
import LinksPanel from './components/LinksPanel/LinksPanel';

function App() {
  return (
    <>
    <div className='background'> 
      <BrowserRouter>
      <Navbar />
      <div className='lower_app_container'> 
      <LinksPanel /> 
        <Routes>

          <Route path="" element={<HomePage />}></Route>

          <Route path="/tour" element={<Tour />}></Route>

        </Routes>
        </div>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
