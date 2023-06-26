// Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?
// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organizing.

// Your task is to return:

// true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
// false otherwise.
// For example, given the following input array:

const list1 = [
	{
		firstName: 'Harry',
		lastName: 'K.',
		country: 'Brazil',
		continent: 'Americas',
		age: 19,
		language: 'Python',
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
const list2 = [
	{
		firstName: 'Daniel',
		lastName: 'J.',
		country: 'Aruba',
		continent: 'Americas',
		age: 42,
		language: 'JavaScript',
	},
	{
		firstName: 'Fatima',
		lastName: 'H.',
		country: 'Pakistan',
		continent: 'Asia',
		age: 8,
		language: 'JavaScript',
	},
	{
		firstName: 'Piotr',
		lastName: 'B.',
		country: 'Poland',
		continent: 'Europe',
		age: 128,
		language: 'JavaScript',
	},
	{
		firstName: 'Manuel',
		lastName: 'C.',
		country: 'Equatorial Guinea',
		continent: 'Africa',
		age: 22,
		language: 'Ruby',
	},
	{
		firstName: 'Yusuf',
		lastName: 'N.',
		country: 'Turkey',
		continent: 'Europe',
		age: 22,
		language: 'Python',
	},
	{
		firstName: 'Sofia',
		lastName: 'A.',
		country: 'Denmark',
		continent: 'Europe',
		age: 19,
		language: 'Python',
	},
	{
		firstName: 'Emma',
		lastName: 'Z.',
		country: 'Netherlands',
		continent: 'Europe',
		age: 29,
		language: 'Ruby',
	},
	{
		firstName: 'Mia',
		lastName: 'H.',
		country: 'Germany',
		continent: 'Europe',
		age: 39,
		language: 'Ruby',
	},
	{
		firstName: 'Marija',
		lastName: 'U.',
		country: 'Republic of Macedonia',
		continent: 'Europe',
		age: 42,
		language: 'JavaScript',
	},
	{
		firstName: 'Ramon',
		lastName: 'R.',
		country: 'Paraguay',
		continent: 'Americas',
		age: 99,
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
		firstName: 'George',
		lastName: 'B.',
		country: 'England',
		continent: 'Europe',
		age: 21,
		language: 'C',
	},
	{
		firstName: 'Thomas',
		lastName: 'L.',
		country: 'Canada',
		continent: 'Americas',
		age: 38,
		language: 'Java',
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
		firstName: 'Lukas',
		lastName: 'X.',
		country: 'Croatia',
		continent: 'Europe',
		age: 75,
		language: 'Python',
	},
	{
		firstName: 'Nikola',
		lastName: 'H.',
		country: 'Serbia',
		continent: 'Europe',
		age: 29,
		language: 'Python',
	},
	{
		firstName: 'Maria',
		lastName: 'I.',
		country: 'Greece',
		continent: 'Europe',
		age: 32,
		language: 'C',
	},
	{
		firstName: 'William',
		lastName: 'L.',
		country: 'Sweden',
		continent: 'Europe',
		age: 32,
		language: 'Java',
	},
	{
		firstName: 'Mamadou',
		lastName: 'E.',
		country: 'Mali',
		continent: 'Africa',
		age: 22,
		language: 'Python',
	},
	{
		firstName: 'Sebastian',
		lastName: 'W.',
		country: 'Venezuela',
		continent: 'Americas',
		age: 8,
		language: 'Python',
	},
	{
		firstName: 'Emily',
		lastName: 'A.',
		country: 'Northern Ireland',
		continent: 'Europe',
		age: 32,
		language: 'JavaScript',
	},
	{
		firstName: 'Maria',
		lastName: 'Y.',
		country: 'Cyprus',
		continent: 'Europe',
		age: 30,
		language: 'Java',
	},
	{
		firstName: 'Marian',
		lastName: 'N.',
		country: 'Colombia',
		continent: 'Americas',
		age: 55,
		language: 'Python',
	},
	{
		firstName: 'Nor',
		lastName: 'E.',
		country: 'Malaysia',
		continent: 'Asia',
		age: 21,
		language: 'Clojure',
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
		firstName: 'Jakub',
		lastName: 'I.',
		country: 'Slovakia',
		continent: 'Europe',
		age: 28,
		language: 'Java',
	},
	{
		firstName: 'Fatima',
		lastName: 'K.',
		country: 'Saudi Arabia',
		continent: 'Asia',
		age: 105,
		language: 'Clojure',
	},
	{
		firstName: 'Anna',
		lastName: 'R.',
		country: 'Liechtenstein',
		continent: 'Europe',
		age: 32,
		language: 'JavaScript',
	},
	{
		firstName: 'Noel',
		lastName: 'O.',
		country: 'Albania',
		continent: 'Europe',
		age: 23,
		language: 'Python',
	},
	{
		firstName: 'Sofia',
		lastName: 'I.',
		country: 'Argentina',
		continent: 'Americas',
		age: 35,
		language: 'Java',
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
		firstName: 'Margret',
		lastName: 'M.',
		country: 'Iceland',
		continent: 'Europe',
		age: 28,
		language: 'Java',
	},
	{
		firstName: 'Emma',
		lastName: 'B.',
		country: 'Norway',
		continent: 'Europe',
		age: 19,
		language: 'Clojure',
	},
	{
		firstName: 'Luka',
		lastName: 'J.',
		country: 'Slovenia',
		continent: 'Europe',
		age: 39,
		language: 'Clojure',
	},
	{
		firstName: 'Jakub',
		lastName: 'Z.',
		country: 'Czech Republic',
		continent: 'Europe',
		age: 42,
		language: 'Java',
	},
	{
		firstName: 'Nikau',
		lastName: 'R.',
		country: 'New Zealand',
		continent: 'Oceania',
		age: 39,
		language: 'Ruby',
	},
	{
		firstName: 'Sofia',
		lastName: 'P.',
		country: 'Italy',
		continent: 'Europe',
		age: 71,
		language: 'Clojure',
	},
	{
		firstName: 'Ellen',
		lastName: 'E.',
		country: 'Finland',
		continent: 'Europe',
		age: 55,
		language: 'Ruby',
	},
	{
		firstName: 'Sofia',
		lastName: 'C.',
		country: 'Estonia',
		continent: 'Europe',
		age: 29,
		language: 'PHP',
	},
	{
		firstName: 'Mariam',
		lastName: 'B.',
		country: 'Egypt',
		continent: 'Africa',
		age: 89,
		language: 'Python',
	},
];
// your function should return true as there is at least one developer from each age group.

// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer up to 199.
function isAgeDiverse(list) {
	const ageList = list.map((x) => x.age);
	if (
		ageList.some((x) => x >= 0 && x < 20) &&
		ageList.some((x) => x >= 20 && x < 30) &&
		ageList.some((x) => x >= 30 && x < 40) &&
		ageList.some((x) => x >= 40 && x < 50) &&
		ageList.some((x) => x >= 50 && x < 60) &&
		ageList.some((x) => x >= 60 && x < 70) &&
		ageList.some((x) => x >= 70 && x < 80) &&
		ageList.some((x) => x >= 80 && x < 90) &&
		ageList.some((x) => x >= 90 && x < 100) &&
		ageList.some((x) => x >= 100 && x < 200)
	) {
		return true;
	} else {
		return false;
	}
}
console.log(isAgeDiverse(list1));
console.log(isAgeDiverse(list2));
