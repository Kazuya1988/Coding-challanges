// Arrays
// Reverse every other word in the string
// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
function reverse(str) {
	return str
		.trim()
		.split(' ')
		.map((e, i) => (i % 2 ? e.split('').reverse().join('') : e))
		.join(' ');
}
console.log(reverse('Reverse this string, please!'));
console.log(reverse("I really don't like reversing strings!"));

// Strings
// WeIrD StRiNg CaSe
// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
function toWeirdCase(string) {
	return string
		.split(' ')
		.map((e) =>
			e
				.split('')
				.map((x, i) => (i % 2 ? x.toLowerCase() : x.toUpperCase()))
				.join('')
		)
		.join(' ');
}
console.log(toWeirdCase('This is a test'));
//'ThIs Is A TeSt'
