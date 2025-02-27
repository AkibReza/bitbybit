import React from 'react';

const DataStructure = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Data Structures</h1>
      <p className="mb-2">
        Data structures are ways to organize and store data so that they can be accessed and modified efficiently. 
        Understanding data structures is crucial for solving complex problems and optimizing algorithms.
      </p>
      <h2 className="text-xl font-semibold mt-4">Common Data Structures</h2>
      <ul className="list-disc list-inside">
        <li><strong>Array:</strong> A collection of items stored at contiguous memory locations.</li>
        <li><strong>Linked List:</strong> A linear collection of data elements, where each element points to the next.</li>
        <li><strong>Stack:</strong> A collection of elements that follows the Last In First Out (LIFO) principle.</li>
        <li><strong>Queue:</strong> A collection of elements that follows the First In First Out (FIFO) principle.</li>
        <li><strong>Map:</strong> A collection of key-value pairs, where each key is unique.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-4">Time and Space Complexity</h2>
      <p>
        Understanding the time and space complexity of data structures is essential for evaluating their efficiency. 
        It helps in choosing the right data structure for a specific problem.
      </p>
    </div>
  );
};

export default DataStructure;