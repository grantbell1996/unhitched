import logo from './logo.svg';
import './App.css';
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>

          <Route path="" element={<HomePage />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
