import React from 'react';

const DataStructureCard = ({ title, description, complexity }) => (
  <div className="bg-gradient-to-br from-white to-purple-50 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-purple-100">
    <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
      <span className="bg-purple-500 w-2 h-2 rounded-full mr-2"></span>
      {title}
    </h3>
    <p className="text-gray-600 mb-4 ml-4 border-l-2 border-purple-200 pl-4">{description}</p>
    <div className="bg-white rounded-lg p-4 shadow-inner">
      <div className="flex space-x-4">
        <div className="flex-1">
          <div className="text-sm font-medium text-purple-600 mb-1">Time Complexity</div>
          <code className="block bg-purple-50 rounded p-2 text-purple-700 font-mono text-sm">
            {complexity.time}
          </code>
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium text-purple-600 mb-1">Space Complexity</div>
          <code className="block bg-purple-50 rounded p-2 text-purple-700 font-mono text-sm">
            {complexity.space}
          </code>
        </div>
      </div>
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
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-8 border border-purple-100">
      <div className="flex items-center mb-6">
        <div className="bg-purple-500 rounded-lg p-3 mr-4">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">Data Structures</h2>
      </div>
      <p className="text-gray-600 mb-8 ml-2 border-l-4 border-purple-500 pl-4">
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