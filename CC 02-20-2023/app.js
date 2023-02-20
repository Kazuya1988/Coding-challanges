// Two Sum
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

// PREP
// P: array and target number
// R: array of 2 index numbers that give sum of target number
// E: twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

function twoSum(numbers, target) {
	// BRUTE FORCE SOLUTION => T: O(n^2) S: O(1)
	let indices = [];
	for (let i = 0; i < numbers.length - 1; i++) {
		for (let j = i + 1; j < numbers.length; j++) {
			if (numbers[i] + numbers[j] === target) {
				indices.push(i);
				indices.push(j);
			}
		}
	}
	return indices;
	// Optimal Solution => T: O(n) S: 0(n)
	// 	const map = {};
	//   for (let i = 0; i < numbers.length; i++){
	//     const currMapVal = map[numbers[i]]
	//      if (currMapVal >= 0){
	//        return [currMapVal, i]
	//      } else {
	//        const numToFind = target - numbers[i]
	//        map[numToFind] = i
	//      }
	//    }
	//   return null
}
console.log(twoSum([1, 2, 3], 4));
