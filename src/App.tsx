import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import GetInTouch from './pages/GetInTouch';
import Home from './pages/Home';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/getintouch" element={<GetInTouch />} />
      </Routes>
    </div>
  );
}

export default App;
