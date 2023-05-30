// Arrays
// Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?
// You will be given a sequence of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organizing.

// Your task is to return:

// true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
// false otherwise.
// For example, given the following input array:

var list1 = [
	{
		firstName: 'Fatima',
		lastName: 'A.',
		country: 'Algeria',
		continent: 'Africa',
		age: 25,
		language: 'JavaScript',
	},
	{
		firstName: 'Agustín',
		lastName: 'M.',
		country: 'Chile',
		continent: 'Americas',
		age: 37,
		language: 'C',
	},
	{
		firstName: 'Jing',
		lastName: 'X.',
		country: 'China',
		continent: 'Asia',
		age: 39,
		language: 'Ruby',
	},
	{
		firstName: 'Laia',
		lastName: 'P.',
		country: 'Andorra',
		continent: 'Europe',
		age: 55,
		language: 'Ruby',
	},
	{
		firstName: 'Oliver',
		lastName: 'Q.',
		country: 'Australia',
		continent: 'Oceania',
		age: 65,
		language: 'PHP',
	},
];
// your function should return true as there is at least one developer from the required 5 geographic zones.

// Notes:

// The input array and continent names will always be valid and formatted as in the list above for example 'Africa' will always start with upper-case 'A'.
function allContinents(list) {
	const continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
	const listedContinents = list.map((e) => e.continent);
	return new Set(listedContinents).size === continents.length;
}
console.log(allContinents(list1));

// Strings
// Give me a Diamond
// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"
function diamond(n) {
	if (n % 2 === 0 || n < 1) return null;
	let diamondArr = [];
	const middleIndex = Math.floor(n / 2);

	for (let i = 0; i < n; i++) {
		const spaces = Math.abs(middleIndex - i);
		const asterisks = n - 2 * spaces;
		diamondArr.push(' '.repeat(spaces) + '*'.repeat(asterisks) + '\n');
	}

	return diamondArr.join('');
}
console.log(diamond(3));
console.log(diamond(5));
