// By 3, or not by 3?
// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of digits as a string, determine if the number represented by the string is divisible by three.

// Example:

// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false
// Try to avoid using the % (modulo) operator.
function divisibleByThree(str) {
	let sum = str
		.split('')
		.map(Number)
		.reduce((sum, n) => sum + n, 0);
	return sum % 3 === 0;
}

// Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
// You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

// For example, given the following input array:

const list1 = [
	{
		firstName: 'Noah',
		lastName: 'M.',
		country: 'Switzerland',
		continent: 'Europe',
		age: 19,
		language: 'C',
	},
	{
		firstName: 'Anna',
		lastName: 'R.',
		country: 'Liechtenstein',
		continent: 'Europe',
		age: 52,
		language: 'JavaScript',
	},
	{
		firstName: 'Ramon',
		lastName: 'R.',
		country: 'Paraguay',
		continent: 'Americas',
		age: 29,
		language: 'Ruby',
	},
	{
		firstName: 'George',
		lastName: 'B.',
		country: 'England',
		continent: 'Europe',
		age: 81,
		language: 'C',
	},
];
// your function should return the following object (associative array in PHP, table in COBOL):

// { C: 2, JavaScript: 1, Ruby: 1 }
// Notes:

// The order of the languages in the object does not matter.
// The count value should be a valid number.
// The input array will always be valid and formatted as in the example above.
function countLanguages(list) {
	return list.reduce((obj, person) => {
		obj[person.language] = (obj[person.language] || 0) + 1;
		return obj;
	}, {});
}
console.log(countLanguages(list1));
