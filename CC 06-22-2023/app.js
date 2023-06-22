// Numbers to Letters
// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.
function switcher(x) {
	const reversedAlphabet = ' zyxwvutsrqponmlkjihgfedcba!? ';
	return x.map((e) => reversedAlphabet[e]).join('');
}
console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8'])); // codewars
console.log(
	switcher([
		'26',
		'21',
		'24',
		'13',
		'20',
		'21',
		'1',
		'17',
		'23',
		'29',
		'22',
		'1',
		'1',
		'28',
		'6',
		'23',
		'20',
		'17',
		'24',
		'14',
		'27',
		'26',
		'24',
		'27',
		'5',
		'6',
		'15',
	])
); // codewars
