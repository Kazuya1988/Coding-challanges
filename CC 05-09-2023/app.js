// Difference of 2
// The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

// The result array should be sorted in ascending order of values.

// Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

// Examples
// [1, 2, 3, 4]  should return [[1, 3], [2, 4]]

// [4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

// [1, 23, 3, 4, 7] should return [[1, 3]]

// [4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]
function twosDifference(input) {
	// let result = [];
	// input.sort((a, b) => a - b);
	// console.log(input);
	// for (let i = 0; i < input.length; i++) {
	// 	let pair = [];
	// 	if (input[i] + 2 === input[i + 1]) {
	// 		pair.push(input[i]);
	// 		pair.push(input[i + 1]);
	// 	} else if (input[i] + 2 === input[i + 2]) {
	// 		pair.push(input[i]);
	// 		pair.push(input[i + 2]);
	// 	} else {
	// 		continue;
	// 	}
	// 	result.push(pair);
	// }
	// return result;
	return input
		.sort(function (a, b) {
			return a - b;
		})
		.filter(function (a) {
			return input.indexOf(a + 2) != -1;
		})
		.map(function (a) {
			return [a, a + 2];
		});
}
console.log(twosDifference([4, 3, 1, 5, 6]));
console.log(twosDifference([1, 23, 3, 4, 7]));
console.log(twosDifference([1, 3, 5, 6, 8, 10, 15, 32, 12, 14, 56]));
