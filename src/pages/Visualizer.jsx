import React from 'react';
import SortingVisualizer from '../components/Visualizer/SortingVisualizer';
import DataStructureVisualizer from '../components/Visualizer/DataStructureVisualizer';

const Visualizer = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Algorithm Visualizer</h1>
      <SortingVisualizer />
      <DataStructureVisualizer />
    </div>
  );
};

export default Visualizer;