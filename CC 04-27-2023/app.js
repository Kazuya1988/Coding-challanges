// Arrays
// Name Array Capping
// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

// example

// capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
// capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
function capMe(names) {
	return names.map((e) => e[0].toUpperCase() + e.slice(1).toLowerCase());
}
console.log(capMe(['KARLY', 'DANIEL', 'KELSEY']));

// Strings

// Shorter concat [reverse longer]
// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b
function shorter_reverse_longer(a, b) {
	return b.length <= a.length
		? `${b}${a.split('').reverse().join('')}${b}`
		: `${a}${b.split('').reverse().join('')}${a}`;
}
console.log(shorter_reverse_longer('first', 'abcde'));
console.log(shorter_reverse_longer('hello', 'bau'));
