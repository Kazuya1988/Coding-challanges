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
