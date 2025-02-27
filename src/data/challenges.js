const challenges = [
  {
    prompt: "Implement a function to find the maximum element in an array.",
    solution: "function findMax(arr) { return Math.max(...arr); }",
    difficulty: "easy"
  },
  {
    prompt: "Write a function to reverse a string.",
    solution: "function reverseString(str) { return str.split('').reverse().join(''); }",
    difficulty: "easy"
  },
  {
    prompt: "Create a function that checks if a number is prime.",
    solution: "function isPrime(num) { for (let i = 2; i <= Math.sqrt(num); i++) { if (num % i === 0) return false; } return num > 1; }",
    difficulty: "medium"
  },
  {
    prompt: "Implement a binary search algorithm.",
    solution: "function binarySearch(arr, target) { let left = 0, right = arr.length - 1; while (left <= right) { const mid = Math.floor((left + right) / 2); if (arr[mid] === target) return mid; if (arr[mid] < target) left = mid + 1; else right = mid - 1; } return -1; }",
    difficulty: "medium"
  },
  {
    prompt: "Write a function to merge two sorted arrays.",
    solution: "function mergeSortedArrays(arr1, arr2) { let merged = [], i = 0, j = 0; while (i < arr1.length && j < arr2.length) { if (arr1[i] < arr2[j]) { merged.push(arr1[i++]); } else { merged.push(arr2[j++]); } } return merged.concat(arr1.slice(i)).concat(arr2.slice(j)); }",
    difficulty: "hard"
  }
];

export default challenges;