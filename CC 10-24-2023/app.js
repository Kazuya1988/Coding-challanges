// Mean Square Error
// Complete the function that

// accepts two integer arrays of equal length
// compares the value each member in one array to the corresponding member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value difference between each member pair.
// Examples
// [1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
// [10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
// [-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2
function solution(firstArray, secondArray) {
  let result = [];
  for (let i = 0; i < firstArray.length; i++) {
    result.push(Math.pow(Math.abs(firstArray[i] - secondArray[i]), 2));
  }
  return result.reduce((a, b) => a + b) / firstArray.length;
}
console.log(solution([1, 2, 3], [4, 5, 6]));
console.log(solution([10, 20, 10, 2], [10, 25, 5, -2]));
console.log(solution([-1, 0], [0, -1]));

// Josephus Survivor
// In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.

// Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

// n=7, k=3 => means 7 people in a circle
// one every 3 is eliminated until one remains
// [1,2,3,4,5,6,7] - initial sequence
// [1,2,4,5,6,7] => 3 is counted out
// [1,2,4,5,7] => 6 is counted out
// [1,4,5,7] => 2 is counted out
// [1,4,5] => 7 is counted out
// [1,4] => 5 is counted out
// [4] => 1 counted out, 4 is the last element - the survivor!
// The above link about the "base" kata description will give you a more thorough insight about the origin of this kind of permutation, but basically that's all that there is to know to solve this kata.

// Notes and tips: using the solution to the other kata to check your function may be helpful, but as much larger numbers will be used, using an array/list to compute the number of the survivor may be too slow; you may assume that both n and k will always be >=1.
function josephusSurvivor(n, k) {
  let array = Array(n)
    .fill()
    .map((_, i) => i + 1);
  p = 0;
  while (array.length > 1) {
    p = (p + k - 1) % array.length;
    array.splice(p, 1);
  }
  return array.pop();
  // Clever
  // return n < 1 ? 1 : (josephusSurvivor(n - 1, k) + --k) % n + 1;
}
console.log(josephusSurvivor(7, 3));
