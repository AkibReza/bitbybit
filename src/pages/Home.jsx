import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-950">
      <HeroSection />
      
      {/* Sections Container */}
      <div className="relative">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>

        {/* Learn Section */}
        <section className="relative py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-4"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0 space-y-6">
                <div className="inline-block">
                  <span className="bg-blue-500/10 text-blue-300 text-sm font-medium px-4 py-1 rounded-full border border-blue-400/20">
                    Start Learning
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Master Data Structures & Algorithms
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Step-by-step tutorials with interactive examples to help you understand complex concepts easily.
                </p>
                <Link 
                  to="/learn"
                  className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <span className="relative z-10">Start Learning</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <svg className="w-5 h-5 ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="md:w-1/2 relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
                <div className="relative bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                  {/* Add code preview or illustration here */}
                  <pre className="text-blue-300 font-mono text-sm">
                    <code>{`function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Visualizer Section */}
        <section className="relative py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-4"
          >
            <div className="flex flex-col md:flex-row-reverse items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0 space-y-6">
                <div className="inline-block">
                  <span className="bg-indigo-500/10 text-indigo-300 text-sm font-medium px-4 py-1 rounded-full border border-indigo-400/20">
                    Interactive Visualizer
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  See Algorithms in Action
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Watch how algorithms work step by step with our interactive visualizations.
                </p>
                <Link 
                  to="/visualizer"
                  className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  <span className="relative z-10">Try Visualizer</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-700 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <svg className="w-5 h-5 ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="md:w-1/2 relative">
                <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full"></div>
                <div className="relative bg-gradient-to-br from-indigo-900/50 to-blue-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                  {/* Add visualization preview here */}
                  <div className="flex justify-center space-x-4">
                    {[40, 20, 60, 10, 50, 30].map((height, index) => (
                      <div
                        key={index}
                        className="w-8 bg-gradient-to-t from-indigo-500 to-blue-500 rounded-t-lg"
                        style={{ height: `${height * 2}px` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Challenge Section */}
        <section className="relative py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-4"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0 space-y-6">
                <div className="inline-block">
                  <span className="bg-purple-500/10 text-purple-300 text-sm font-medium px-4 py-1 rounded-full border border-purple-400/20">
                    Practice & Improve
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Challenge Yourself
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Solve real coding problems and improve your problem-solving skills.
                </p>
                <Link 
                  to="/challenges"
                  className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <span className="relative z-10">Start Challenges</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <svg className="w-5 h-5 ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="md:w-1/2 relative">
                <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full"></div>
                <div className="relative bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                  {/* Add challenges preview */}
                  <div className="space-y-4">
                    <div className="h-8 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-lg"></div>
                    <div className="h-8 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-lg w-3/4"></div>
                    <div className="h-8 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-lg w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default Home;