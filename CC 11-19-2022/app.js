// Reverse words
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
function reverseWords(str) {
	return str
		.split(' ')
		.map((e) => e.split('').reverse().join(''))
		.join(' ');
}
console.log(reverseWords('This is an example!'));

// Find the divisors!

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(integer) {
	let arrOfDivisors = [];
	for (let i = 2; i < integer; i++) {
		if (integer % i === 0) {
			arrOfDivisors.push(i);
		}
	}
	return arrOfDivisors.length ? arrOfDivisors : `${integer} is prime`;
}
console.log(divisors(12));
