import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Visualizer from './pages/Visualizer';
import Challenges from './pages/Challenges';
import Login from './pages/Login';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/visualizer" element={<Visualizer />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
