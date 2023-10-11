// Find The Duplicated Number in a Consecutive Unsorted List - Tougher Version
// Spin-off of this kata, here you will have to figure out an efficient strategy to solve the problem of finding the sole duplicate number among an unsorted array/list of numbers starting from 1 up to n.

// Hints: a solution in linear time can be found; using the most intuitive ones to search for duplicates that can run in O(n²) time won't work.
const findDup = (arr) => {
  const remDups = [...new Set(arr)];
  const sumWithoutDups = remDups.reduce((sum, e) => sum + e, 0);
  const arrSum = arr.reduce((sum, e) => sum + e, 0);

  return arrSum - sumWithoutDups;
  // Clever way
  //   return arr.reduce((a, b) => a + b) - (arr.length * (arr.length - 1)) / 2;
};
console.log(findDup([1, 2, 3, 1]));
console.log(findDup([5, 4, 3, 2, 1, 1]));
console.log(findDup([1, 3, 2, 5, 4, 5, 7, 6]));
