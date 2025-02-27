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
    <div className="code-editor">
      <h2 className="text-xl font-bold mb-4">{challenge.title}</h2>
      <p className="mb-4">{challenge.prompt}</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={code}
          onChange={handleChange}
          className="w-full h-40 border border-gray-300 p-2 rounded"
          placeholder="Write your code here..."
        />
        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CodeEditor;