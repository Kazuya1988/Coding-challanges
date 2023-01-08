// Largest pair sum in array
// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.
function largestPairSum(numbers) {
	let sortedNumbers = numbers.sort((a, b) => b - a);
	return sortedNumbers[0] + sortedNumbers[1];
}
console.log(largestPairSum([10, 14, 2, 23, 19]));

// Most digits
// Find the number with the most digits.
// If two numbers in the argument array have the same number of digits, return the first one in the array.
function findLongest(array) {
	// let largestNumber = array[0];
	// for (let i = 1; i < array.length; i++) {
	//   if (array[i].toString().length > largestNumber.toString().length) {
	//     largestNumber = array[i];
	//   }
	// }
	// return largestNumber;
	const longestNumbers = array.filter((number) => {
		return (
			number.toString().length ===
			Math.max(...array.map((number) => number.toString().length))
		);
	});
	return longestNumbers[0];
}
console.log(findLongest([10, 500, 900]));
