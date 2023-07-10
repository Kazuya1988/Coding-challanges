// Almost Even
// We need the ability to divide an unknown integer into a given number of even parts — or at least as even as they can be. The sum of the parts should be the original value, but each part should be an integer, and they should be as close as possible.

// Example code:

// splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]
// Complete the function so that it returns an array of integer representing the parts. Ignoring the order of the parts, there is only one valid solution for each input to your function!
/**
 * Returns a [parts]-length array of equal or nearly equal
 * integers that add up to [num].
 */
const splitInteger = function (num, parts) {
	let result = [];
	let lowest = Math.floor(num / parts);
	let highest = Math.ceil(num / parts);
	for (let i = 0; i < parts; i++) {
		let sum = result.reduce((sum, num) => sum + num, 0);
		if (sum < num && (num - sum) % lowest === 0) {
			result.push(lowest);
		} else {
			result.push(highest);
		}
	}
	return result.sort();
	// Cleaver solution
	// const remainder = num % parts;
	// const int = Math.floor(num / parts);

	// return [
	// 	...new Array(parts - remainder).fill(int),
	// 	...new Array(remainder).fill(int + 1),
	// ];
};
// [10]
console.log(splitInteger(10, 1));
// [1,1]
console.log(splitInteger(2, 2));
// [4, 4, 4, 4, 4]
console.log(splitInteger(20, 5));
// [3, 3, 3, 3, 4, 4]
console.log(splitInteger(20, 6));
// [3, 4, 4]
console.log(splitInteger(11, 3));
