// Arrays
// Spacify
// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"
function spacify(str) {
	return str.split('').join(' ');
}
console.log(spacify('hello world'));

// Strings
// All unique
// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
function hasUniqueChars(str) {
	return str.length === [...new Set(str)].length;
	// return str.length === new Set(str).size
}
console.log(hasUniqueChars('abcdef'));
