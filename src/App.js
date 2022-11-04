import logo from './logo.svg';
import './App.css';
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import Tour from './components/Tour/Tour';
import LinksPanel from './components/LinksPanel/LinksPanel';
import Art from './components/Art/Art';
import Design from './components/Design/Design';
import Bio from './components/Bio/Bio';
import Video from './components/Video/Video';
import FieldTrips from './components/FieldTrips/FieldTrips';

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

          <Route path="/art" element={<Art />}></Route>

          <Route path="/design" element={<Design />}></Route>

          <Route path="/bio" element={<Bio />}></Route>

          <Route path="/video" element={<Video />}></Route>

          <Route path="/fieldtrips" element={<FieldTrips />}></Route>

        </Routes>
        </div>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
