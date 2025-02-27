import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the DSA Learning Platform</h1>
      <p className="text-lg mb-8">
        Explore various data structures and algorithms through interactive visualizations and coding challenges.
      </p>
      <div className="flex space-x-4">
        <Link to="/learn" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Learn
        </Link>
        <Link to="/visualizer" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Visualize
        </Link>
        <Link to="/challenges" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
          Challenges
        </Link>
      </div>
    </div>
  );
};

export default Home;