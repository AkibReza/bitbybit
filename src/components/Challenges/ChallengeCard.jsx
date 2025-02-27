import React from 'react';

const ChallengeCard = ({ challenge }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold">{challenge.prompt}</h2>
      <p className="mt-2">{challenge.description}</p>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
        Attempt Challenge
      </button>
    </div>
  );
};

export default ChallengeCard;