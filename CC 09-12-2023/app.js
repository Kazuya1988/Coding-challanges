// Coding Meetup #11 - Higher-Order Functions Series - Find the average age
// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organizing.

// Given the following input array:

const list1 = [
	{
		firstName: 'Maria',
		lastName: 'Y.',
		country: 'Cyprus',
		continent: 'Europe',
		age: 30,
		language: 'Java',
	},
	{
		firstName: 'Victoria',
		lastName: 'T.',
		country: 'Puerto Rico',
		continent: 'Americas',
		age: 70,
		language: 'Python',
	},
];
const list2 = [
	{
		firstName: 'Noa',
		lastName: 'A.',
		country: 'Israel',
		continent: 'Asia',
		age: 20,
		language: 'Ruby',
	},
	{
		firstName: 'Andrei',
		lastName: 'E.',
		country: 'Romania',
		continent: 'Europe',
		age: 21,
		language: 'C',
	},
];
const list3 = [
	{
		firstName: 'Sofia',
		lastName: 'P.',
		country: 'Italy',
		continent: 'Europe',
		age: 41,
		language: 'Clojure',
	},
	{
		firstName: 'Kseniya',
		lastName: 'T.',
		country: 'Belarus',
		continent: 'Europe',
		age: 29,
		language: 'JavaScript',
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
		firstName: 'Noa',
		lastName: 'A.',
		country: 'Israel',
		continent: 'Asia',
		age: 40,
		language: 'Ruby',
	},
	{
		firstName: 'Andrei',
		lastName: 'E.',
		country: 'Romania',
		continent: 'Europe',
		age: 59,
		language: 'C',
	},
	{
		firstName: 'Maria',
		lastName: 'S.',
		country: 'Peru',
		continent: 'Americas',
		age: 60,
		language: 'C',
	},
	{
		firstName: 'Lukas',
		lastName: 'X.',
		country: 'Croatia',
		continent: 'Europe',
		age: 75,
		language: 'Python',
	},
	{
		firstName: 'Chloe',
		lastName: 'K.',
		country: 'Guernsey',
		continent: 'Europe',
		age: 88,
		language: 'Ruby',
	},
	{
		firstName: 'Viktoria',
		lastName: 'W.',
		country: 'Bulgaria',
		continent: 'Europe',
		age: 98,
		language: 'PHP',
	},
	{
		firstName: 'Piotr',
		lastName: 'B.',
		country: 'Poland',
		continent: 'Europe',
		age: 128,
		language: 'JavaScript',
	},
];
// write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer.
function getAverageAge(list) {
	return Math.round(list.reduce((sum, obj) => sum + obj.age, 0) / list.length);
}
console.log(getAverageAge(list1));
console.log(getAverageAge(list2));
console.log(getAverageAge(list3));
