import React from 'react';
import Algorithm from '../components/Learn/Algorithm';
import DataStructure from '../components/Learn/DataStructure';

const Learn = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Learn Data Structures and Algorithms</h1>
      <p className="mb-4">
        Welcome to the learning platform! Here you can explore various algorithms and data structures.
      </p>
      <h2 className="text-2xl font-semibold mt-6">Algorithms</h2>
      <Algorithm />
      <h2 className="text-2xl font-semibold mt-6">Data Structures</h2>
      <DataStructure />
    </div>
  );
};

export default Learn;