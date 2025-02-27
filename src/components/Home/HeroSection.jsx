import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/90"></div>
      </div>

      {/* Hero Content */}
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Master 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
                {' Data Structures '}
              </span>
              & 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
                {' Algorithms'}
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Interactive visualizations and hands-on challenges to help you master computer science fundamentals
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for algorithms..."
                  className="w-full px-6 py-4 text-lg bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;