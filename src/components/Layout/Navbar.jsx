import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed w-full z-50 ${
      isHomePage ? 'bg-transparent' : 'bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo Section */}
          <Link to="/" className="flex items-center">
            <div className="relative group">
              <div className="flex items-center space-x-2">
                <span className="font-mono text-3xl font-black transform transition-transform group-hover:scale-105 duration-300">
                  <span className="text-white animate-pulse">{`<`}</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-blue-200 animate-gradient">Bit</span>
                  <span className="text-white animate-pulse">{`>`}</span>
                </span>
                <span className="text-2xl font-code text-blue-300 font-bold transform transition-all group-hover:scale-110 duration-300 group-hover:text-blue-200">
                  By
                </span>
                <span className="font-mono text-3xl font-black transform transition-transform group-hover:scale-105 duration-300">
                  <span className="text-white animate-pulse">{`<`}</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-blue-200 animate-gradient">Bit</span>
                  <span className="text-white animate-pulse">{`/>`}</span>
                </span>
              </div>
              {/* Add subtle glow effect on hover */}
              <div className="absolute -inset-2 bg-blue-500/20 rounded-lg blur-xl transition-opacity opacity-0 group-hover:opacity-100 duration-300"></div>
            </div>
          </Link>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/learn">Learn</NavLink>
            <NavLink to="/visualizer">Visualizer</NavLink>
            <NavLink to="/challenges">Challenges</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={`relative font-mono text-white font-medium group ${
        isActive ? 'text-blue-200' : 'hover:text-blue-200'
      }`}
    >
      <span className="relative z-10 text-lg transition-colors duration-200">
        {`{ ${children} }`}
      </span>
      {isActive && (
        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-200"></div>
      )}
    </Link>
  );
};

export default Navbar;