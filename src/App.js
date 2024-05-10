import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';
import InstantConsultation from  './Instant_Consultation.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
        <BrowserRouter>
            <Navbar/>
                <Routes></Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
