// Round up to the next multiple of 5
// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.
function roundToNext5(n) {
	while (n % 5 !== 0) {
		n++;
	}
	return n;
}
console.log(roundToNext5(12));

// Simple Fun #176: Reverse Letter
// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string
function reverseLetter(str) {
	return str
		.split('')
		.filter((e) => e.match(/[a-z]/i))
		.reverse()
		.join('');
}
console.log(reverseLetter('ultr53o?n'));
