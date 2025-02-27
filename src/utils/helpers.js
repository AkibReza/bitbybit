// src/utils/helpers.js

export const generateRandomArray = (size, min = 1, max = 100) => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * (max - min + 1)) + min);
};

export const validateInput = (input) => {
  return typeof input === 'string' && input.trim() !== '';
};

export const formatTimeComplexity = (complexity) => {
  return complexity.replace(/O\((.*)\)/, 'O($1)');
};