import React from 'react';

const ChallengeCard = ({ challenge }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow 
                    border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 mb-3">{challenge.prompt}</h2>
      <p className="text-gray-600 leading-relaxed mb-6">{challenge.description}</p>
      <button 
        className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold 
                   py-2.5 px-6 rounded-lg transition-all duration-200
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                   flex items-center gap-2"
      >
        Attempt Challenge
        <svg 
          className="w-4 h-4 transition-transform group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default ChallengeCard;