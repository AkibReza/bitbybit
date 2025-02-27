import React from 'react';

const DataStructureCard = ({ title, description, complexity }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500">
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="bg-gray-50 rounded p-3">
      <p className="text-sm font-medium text-gray-500">Time Complexity:</p>
      <p className="text-blue-600 font-mono">{complexity.time}</p>
      <p className="text-sm font-medium text-gray-500 mt-2">Space Complexity:</p>
      <p className="text-blue-600 font-mono">{complexity.space}</p>
    </div>
  </div>
);

const DataStructure = () => {
  const dataStructures = [
    {
      title: 'Array',
      description: 'A collection of elements stored at contiguous memory locations.',
      complexity: {
        time: 'Access: O(1), Search: O(n)',
        space: 'O(n)'
      }
    },
    {
      title: 'Linked List',
      description: 'A linear collection of elements where each element points to the next.',
      complexity: {
        time: 'Access: O(n), Search: O(n)',
        space: 'O(n)'
      }
    },
    {
      title: 'Binary Tree',
      description: 'A tree data structure where each node has at most two children.',
      complexity: {
        time: 'Access: O(log n), Search: O(log n)',
        space: 'O(n)'
      }
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Data Structures</h2>
      <p className="text-gray-600 mb-8">
        Learn about fundamental data structures and their practical applications.
      </p>
      <div className="grid gap-6">
        {dataStructures.map((ds, index) => (
          <DataStructureCard key={index} {...ds} />
        ))}
      </div>
    </div>
  );
};

export default DataStructure;