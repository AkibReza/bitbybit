import React from 'react';
import Algorithm from '../components/Learn/Algorithm';
import DataStructure from '../components/Learn/DataStructure';

const Learn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Learn Data Structures and Algorithms
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master the fundamentals of computer science through interactive lessons
            and visualizations.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <Algorithm />
          <DataStructure />
        </div>
      </div>
    </div>
  );
};

export default Learn;