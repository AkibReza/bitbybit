import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Learn = () => {
  const [activeTab, setActiveTab] = useState('algorithms');

  const algorithmTopics = [
    {
      title: "Sorting Algorithms",
      description: "Master different sorting techniques from basic to advanced",
      icon: "🔄",
      topics: [
        { name: 'Bubble Sort', path: '/learn/algorithms/bubble-sort' },
        { name: 'Quick Sort', path: '/learn/algorithms/quick-sort' },
        { name: 'Merge Sort', path: '/learn/algorithms/merge-sort' },
        { name: 'Heap Sort', path: '/learn/algorithms/heap-sort' }
      ],
      difficulty: "Beginner",
      bgGradient: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: "Search Algorithms",
      description: "Learn efficient searching techniques and their applications",
      icon: "🔍",
      topics: [
        { name: 'Linear Search', path: '/learn/algorithms/linear-search' },
        { name: 'Binary Search', path: '/learn/algorithms/binary-search' },
        { name: 'Depth-First Search', path: '/learn/algorithms/dfs' },
        { name: 'Breadth-First Search', path: '/learn/algorithms/bfs' }
      ],
      difficulty: "Intermediate",
      bgGradient: "from-indigo-500/20 to-purple-500/20"
    },
    {
      title: "Dynamic Programming",
      description: "Solve complex problems using dynamic programming",
      icon: "📊",
      topics: [
        { name: 'Fibonacci', path: '/learn/algorithms/fibonacci' },
        { name: 'Knapsack', path: '/learn/algorithms/knapsack' },
        { name: 'Longest Common Subsequence', path: '/learn/algorithms/lcs' },
        { name: 'Matrix Chain Multiplication', path: '/learn/algorithms/mcm' }
      ],
      difficulty: "Advanced",
      bgGradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  const dataStructureTopics = [
    {
      title: "Linear Data Structures",
      description: "Fundamental linear data structures and their operations",
      icon: "📝",
      topics: [
        { name: 'Arrays', path: '/learn/data-structures/arrays' },
        { name: 'Linked Lists', path: '/learn/data-structures/linked-lists' },
        { name: 'Stacks', path: '/learn/data-structures/stacks' },
        { name: 'Queues', path: '/learn/data-structures/queues' }
      ],
      difficulty: "Beginner",
      bgGradient: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: "Trees & Graphs",
      description: "Advanced non-linear data structures",
      icon: "🌳",
      topics: [
        { name: 'Binary Trees', path: '/learn/data-structures/binary-trees' },
        { name: 'BST', path: '/learn/data-structures/bst' },
        { name: 'AVL Trees', path: '/learn/data-structures/avl-trees' },
        { name: 'Graphs', path: '/learn/data-structures/graphs' }
      ],
      difficulty: "Intermediate",
      bgGradient: "from-indigo-500/20 to-purple-500/20"
    },
    {
      title: "Advanced Structures",
      description: "Complex data structures for specific use cases",
      icon: "⚡",
      topics: [
        { name: 'Hash Tables', path: '/learn/data-structures/hash-tables' },
        { name: 'Heaps', path: '/learn/data-structures/heaps' },
        { name: 'Tries', path: '/learn/data-structures/tries' },
        { name: 'Disjoint Sets', path: '/learn/data-structures/disjoint-sets' }
      ],
      difficulty: "Advanced",
      bgGradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-950 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-full p-1">
            <div className="flex space-x-2">
              <TabButton 
                active={activeTab === 'algorithms'} 
                onClick={() => setActiveTab('algorithms')}
              >
                Algorithms
              </TabButton>
              <TabButton 
                active={activeTab === 'datastructures'} 
                onClick={() => setActiveTab('datastructures')}
              >
                Data Structures
              </TabButton>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {activeTab === 'algorithms' 
            ? algorithmTopics.map((topic, idx) => (
                <TopicCard key={idx} {...topic} />
              ))
            : dataStructureTopics.map((topic, idx) => (
                <TopicCard key={idx} {...topic} />
              ))
          }
        </motion.div>
      </div>
    </main>
  );
};

const TabButton = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-full transition-all duration-300 ${
      active 
        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg' 
        : 'text-blue-200 hover:text-white'
    }`}
  >
    {children}
  </button>
);

const TopicCard = ({ title, description, icon, topics, difficulty, bgGradient }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="group relative aspect-[3/4]" // Fixed aspect ratio
  >
    <div className={`absolute inset-0 bg-gradient-to-r ${bgGradient} blur-xl rounded-2xl transform group-hover:scale-105 transition-transform duration-300`}></div>
    <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-4">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-blue-100 mb-4">{description}</p>

      {/* Topics - Now clickable */}
      <div className="flex-grow space-y-2">
        {topics.map((topic, index) => (
          <Link
            key={index}
            to={topic.path}
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
            <span className="text-blue-200 hover:text-white transition-colors duration-200">
              {topic.name}
            </span>
          </Link>
        ))}
      </div>

      {/* Difficulty Badge - Always at bottom */}
      <div className="mt-auto pt-4 border-t border-white/10">
        <span className={`inline-block px-3 py-1 rounded-full text-sm ${
          difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300' :
          difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
          'bg-red-500/20 text-red-300'
        }`}>
          {difficulty}
        </span>
      </div>
    </div>
  </motion.div>
);

export default Learn;