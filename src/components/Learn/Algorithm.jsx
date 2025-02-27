import React from 'react';

const AlgorithmCard = ({ title, items }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
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
    graph: ['Dijkstras Algorithm', 'Floyd-Warshall', 'Kruskalzs Algorithm']
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Algorithms</h2>
      <p className="text-gray-600 mb-8">
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