import React from 'react';

const AlgorithmCard = ({ title, items }) => (
  <div className="bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-blue-100">
    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
      <span className="bg-blue-500 w-2 h-2 rounded-full mr-2"></span>
      {title}
    </h3>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li 
          key={index} 
          className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer transform hover:translate-x-2 transition-transform duration-200 bg-white rounded-lg p-3 shadow-sm"
        >
          <span className="flex items-center justify-center bg-blue-100 rounded-full w-8 h-8 mr-3">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Algorithm = () => {
  const algorithms = {
    sorting: ['Bubble Sort', 'Quick Sort', 'Merge Sort', 'Insertion Sort', 'Selection Sort'],
    searching: ['Linear Search', 'Binary Search', 'Depth-First Search', 'Breadth-First Search'],
    graph: ['Dijkstras Algorithm', 'Floyd-Warshall', 'Kruskals Algorithm']
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8 border border-blue-100">
      <div className="flex items-center mb-6">
        <div className="bg-blue-500 rounded-lg p-3 mr-4">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">Algorithms</h2>
      </div>
      <p className="text-gray-600 mb-8 ml-2 border-l-4 border-blue-500 pl-4">
        Explore various algorithms through interactive visualizations and step-by-step explanations.
      </p>
      <div className="space-y-6">
        <AlgorithmCard title="Sorting Algorithms" items={algorithms.sorting} />
        <AlgorithmCard title="Searching Algorithms" items={algorithms.searching} />
        <AlgorithmCard title="Graph Algorithms" items={algorithms.graph} />
      </div>
    </div>
  );
};

export default Algorithm;