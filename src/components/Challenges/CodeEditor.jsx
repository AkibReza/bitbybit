import React, { useState } from 'react';

const CodeEditor = ({ challenge, onSubmit }) => {
  const [code, setCode] = useState('');

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(code);
  };

  return (
    <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{challenge.title}</h2>
      <p className="text-gray-600 mb-6 leading-relaxed">{challenge.prompt}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={code}
          onChange={handleChange}
          className="w-full h-48 bg-white border border-gray-200 rounded-lg p-4 font-mono text-sm 
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all
                   placeholder:text-gray-400 resize-none"
          placeholder="Write your code here..."
        />
        <button 
          type="submit" 
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold 
                   py-2.5 px-6 rounded-lg transition-colors duration-200 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit Solution
        </button>
      </form>
    </div>
  );
};

export default CodeEditor;