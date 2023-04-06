// Arrays
// Coding Meetup #3 - Higher-Order Functions Series - is Ruby coming?
// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
// ];
// your function should return true.

// Notes:

// The input array will always be valid and formatted as in the example above.
function isRubyComing(list) {
	return list.some((person) => person.language === 'Ruby');
}
const list1 = [
	{
		firstName: 'Emma',
		lastName: 'Z.',
		country: 'Netherlands',
		continent: 'Europe',
		age: 29,
		language: 'Ruby',
	},
	{
		firstName: 'Piotr',
		lastName: 'B.',
		country: 'Poland',
		continent: 'Europe',
		age: 128,
		language: 'Javascript',
	},
	{
		firstName: 'Jayden',
		lastName: 'P.',
		country: 'Jamaica',
		continent: 'Americas',
		age: 42,
		language: 'JavaScript',
	},
];
console.log(isRubyComing(list1));

// Strings

// Alphabet symmetry
// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.
function solve(arr) {
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	return arr.map((word) => {
		let count = 0;
		for (let i = 0; i < word.length; i++) {
			if (word[i].toLowerCase() === alphabet[i]) {
				count++;
			}
		}
		return count;
	});
}

console.log(solve(['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc']));
