// Even numbers in an array
// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
function evenNumbers(array, number) {
	return array.filter((num) => num % 2 === 0).slice(-number);
}
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

// Currying functions: multiply all elements in an array
// To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

// Example:

// multiplyAll([1, 2, 3])(2) = [2, 4, 6];
// You must not mutate the original array.
function multiplyAll(arr) {
	return function (n) {
		let newArr = [];
		arr.forEach((num) => newArr.push(num * n));
		return newArr;
	};
}
console.log(multiplyAll([1, 2, 3])(2));
