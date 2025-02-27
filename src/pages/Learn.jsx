import React from 'react';
import Algorithm from '../components/Learn/Algorithm';
import DataStructure from '../components/Learn/DataStructure';

const Learn = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Learn Data Structures and Algorithms
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Master the fundamentals of computer science through interactive lessons
          and visualizations.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <Algorithm />
          <DataStructure />
        </div>
      </div>
    </div>
  );
};

export default Learn;