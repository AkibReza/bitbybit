import React from 'react';

const Algorithm = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Algorithms</h1>
      <p className="mb-2">In this section, you will learn about various algorithms, their explanations, and visualizations.</p>
      <h2 className="text-xl font-semibold mt-4">Sorting Algorithms</h2>
      <p>Sorting algorithms are used to rearrange a list or array in a specific order. Common sorting algorithms include:</p>
      <ul className="list-disc ml-5">
        <li>Bubble Sort</li>
        <li>Quick Sort</li>
        <li>Merge Sort</li>
      </ul>
      <h2 className="text-xl font-semibold mt-4">Searching Algorithms</h2>
      <p>Searching algorithms are used to find specific elements within a data structure. Common searching algorithms include:</p>
      <ul className="list-disc ml-5">
        <li>Linear Search</li>
        <li>Binary Search</li>
      </ul>
      <h2 className="text-xl font-semibold mt-4">Complexity Analysis</h2>
      <p>Understanding the time and space complexity of algorithms is crucial for evaluating their efficiency.</p>
    </div>
  );
};

export default Algorithm;