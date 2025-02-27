import React, { useState } from "react";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  const generateRandomArray = () => {
    const newArray = [];
    for (let i = 0; i < 50; i++) {
      newArray.push(Math.floor(Math.random() * 100));
    }
    setArray(newArray);
  };

  const bubbleSort = () => {
    const arr = [...array];
    const animations = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        animations.push([j, j + 1]);
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    // Visualize the sorting process using animations
    // (Implementation of visualization logic goes here)
  };

  return (
    <div>
      <h1>Sorting Visualizer</h1>
      <button onClick={generateRandomArray}>Generate Random Array</button>
      <button onClick={bubbleSort}>Bubble Sort</button>
      <div className="array-container">
        {array.map((value, index) => (
          <div
            key={index}
            className="array-bar"
            style={{ height: `${value * 3}px` }}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;
