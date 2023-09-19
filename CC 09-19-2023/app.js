// Task 1

// Create Phone Number
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!
function createPhoneNumber(numbers) {
	return `(${numbers.slice(0, 3).join('')}) ${numbers
		.slice(3, 6)
		.join('')}-${numbers.slice(6).join('')}`;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// Task 2

// Assemble string
// Task
// In this task, you need to restore a string from a list of its copies.

// You will receive an array of strings. All of them are supposed to be the same as the original but, unfortunately, they were corrupted which means some of the characters were replaced with asterisks ("*").

// You have to restore the original string based on non-corrupted information you have. If in some cases it is not possible to determine what the original character was, use "#" character as a special marker for that.

// If the array is empty, then return an empty string.

// Examples:
const inputOne = ['a*cde', '*bcde', 'abc*e'];
// result = "abcde"

const inputTwo = ['a*c**', '**cd*', 'a*cd*'];
// result = "a#cd#"
function assembleString(array) {
	if (!array.length) return '';
	const grouped = [];
	for (let i = 0; i < array[0].length; i++) {
		let newArr = [];
		for (let j = 0; j < array.length; j++) {
			newArr.push(array[j][i]);
		}
		grouped.push(newArr);
	}
	return grouped
		.map((e) => e.filter((x) => x !== '*'))
		.map((y) => (y.length ? y[0] : '#'))
		.join('');
}

console.log(assembleString(inputOne));
console.log(assembleString(inputTwo));
console.log(
	assembleString(['H*llo, W*rld!', 'Hel*o, *or*d!', '*ello* World*'])
);
console.log(
	assembleString([
		".** . .' .'' ! ! .",
		". . . .' **' ! * .",
		"* . .*.* .'' * ! .",
		". . .*.' .**** ! .",
		"**. * .* .*' ! ! .",
	])
);
