import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
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
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Interactive visualizations and hands-on challenges to help you master computer science fundamentals
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <SectionCard
                title="Learn"
                description="Step-by-step tutorials and visualizations"
                to="/learn"
                icon="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
              <SectionCard
                title="Visualize"
                description="See algorithms in action with interactive demos"
                to="/visualizer"
                icon="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
              />
              <SectionCard
                title="Challenge"
                description="Test your skills with coding challenges"
                to="/challenges"
                icon="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionCard = ({ title, description, to, icon }) => (
  <Link 
    to={to}
    className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
  >
    <div className="flex flex-col items-center text-center">
      <div className="rounded-full bg-blue-500 p-3 mb-4">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-blue-100">{description}</p>
    </div>
  </Link>
);

export default HeroSection;