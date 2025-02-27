import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm bg-opacity-90">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Welcome to the DSA Learning Platform
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
          Explore various data structures and algorithms through interactive visualizations 
          and engaging coding challenges.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            to="/learn"
            className="w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 text-center"
          >
            Start Learning
          </Link>
          <Link
            to="/visualizer"
            className="w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-green-500 to-green-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/50 text-center"
          >
            Visualize DSA
          </Link>
          <Link
            to="/challenges"
            className="w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 text-center"
          >
            Take Challenges
          </Link>
        </div>
      </div>
      <div className="mt-12 text-center text-gray-600">
        <p className="text-sm">
          Start your journey into Data Structures and Algorithms today
        </p>
      </div>
    </div>
  );
};

export default Home;