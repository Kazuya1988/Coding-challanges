// First-Class Function Factory
// Write a function, factory, that takes a number as its parameter and returns another function.

// The returned function should take an array of numbers as its parameter, and return an array of those numbers multiplied by the number that was passed into the first function.

// In the example below, 5 is the number passed into the first function. So it returns a function that takes an array and multiplies all elements in it by five.

// Translations and comments (and upvotes) welcome!

// Example
const fives = factory(5); // returns a function - fives
const myArray = [1, 2, 3];
console.log(fives(myArray)); //returns [5, 10, 15];
function factory(x) {
	return (arr) => arr.map((n) => n * x);
}

// Strings
// Vowel One
// vowelOne
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"
function vowelOne(str) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	return str
		.toLowerCase()
		.split('')
		.map((e) => (vowels.includes(e) ? 1 : 0))
		.join('');
}
console.log(vowelOne('abceios')); // "1001110"
console.log(vowelOne('aeiou, abc')); // "1111100100"
console.log(vowelOne('vowelOne')); // "1111100100"
