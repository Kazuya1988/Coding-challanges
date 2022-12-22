// Factorial
// Your task is to write function factorial.
function factorial(n) {
	let result = 1;
	for (let i = 1; i <= n; i++) {
		result *= i;
	}
	return result;
}
console.log(factorial(1));

// Number of Decimal Digits
// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.
function digits(n) {
	return n.toString().length;
}
console.log(digits(128685));

// Remove duplicate words
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'
function removeDuplicateWords(s) {
	return [...new Set(s.split(' '))].join(' ');
}
console.log(
	removeDuplicateWords(
		'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
	)
);

// Row Weights
// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.
function rowWeights(array) {
	let teamOne = [];
	let teamTwo = [];
	for (let i = 0; i < array.length; i++) {
		if (i % 2 === 0) {
			teamOne.push(array[i]);
		} else {
			teamTwo.push(array[i]);
		}
	}
	return [
		teamOne.reduce((sum, w) => sum + w, 0),
		teamTwo.reduce((sum, w) => sum + w, 0),
	];
}
console.log(rowWeights([13, 27, 49]));
