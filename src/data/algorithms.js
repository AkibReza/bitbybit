export const algorithms = [
  {
    name: "Bubble Sort",
    description: "A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
    complexity: {
      time: {
        best: "O(n)",
        average: "O(n^2)",
        worst: "O(n^2)"
      },
      space: "O(1)"
    }
  },
  {
    name: "Quick Sort",
    description: "A highly efficient sorting algorithm that uses a divide-and-conquer approach to sort elements by partitioning the array into smaller sub-arrays.",
    complexity: {
      time: {
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n^2)"
      },
      space: "O(log n)"
    }
  },
  {
    name: "Merge Sort",
    description: "A sorting algorithm that divides the unsorted list into n sub-lists, each containing one element, and then merges those sub-lists to produce new sorted sub-lists until there is only one sub-list remaining.",
    complexity: {
      time: {
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n log n)"
      },
      space: "O(n)"
    }
  },
  {
    name: "Insertion Sort",
    description: "A simple sorting algorithm that builds the final sorted array one item at a time, with the advantage of being efficient for small data sets.",
    complexity: {
      time: {
        best: "O(n)",
        average: "O(n^2)",
        worst: "O(n^2)"
      },
      space: "O(1)"
    }
  },
  {
    name: "Selection Sort",
    description: "A simple comparison sorting algorithm that divides the input list into two parts: a sorted and an unsorted part, and repeatedly selects the smallest (or largest) element from the unsorted part and moves it to the sorted part.",
    complexity: {
      time: {
        best: "O(n^2)",
        average: "O(n^2)",
        worst: "O(n^2)"
      },
      space: "O(1)"
    }
  }
];