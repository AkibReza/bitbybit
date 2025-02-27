import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-lg font-bold">DSA Learning Platform</div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:underline">Home</Link>
          <Link to="/learn" className="text-white hover:underline">Learn</Link>
          <Link to="/visualizer" className="text-white hover:underline">Visualizer</Link>
          <Link to="/challenges" className="text-white hover:underline">Challenges</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;