import React from 'react';
import ChallengeCard from '../components/Challenges/ChallengeCard';

const Challenges = () => {
  const challenges = [
    {
      prompt: "Implement a function to reverse a string.",
      difficulty: "Easy",
    },
    {
      prompt: "Write a function to find the maximum number in an array.",
      difficulty: "Easy",
    },
    {
      prompt: "Create a function that checks if a number is prime.",
      difficulty: "Medium",
    },
    {
      prompt: "Implement a binary search algorithm.",
      difficulty: "Medium",
    },
    {
      prompt: "Solve the FizzBuzz problem.",
      difficulty: "Easy",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Coding Challenges</h1>
      <div className="grid grid-cols-1 gap-4">
        {challenges.map((challenge, index) => (
          <ChallengeCard key={index} challenge={challenge} />
        ))}
      </div>
    </div>
  );
};

export default Challenges;