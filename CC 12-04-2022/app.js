// Find the capitals
// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
const capitals = function (word) {
	let capitalIndex = [];
	let letters = word.split('');
	for (let i = 0; i < letters.length; i++) {
		if (letters[i] === letters[i].toUpperCase()) {
			capitalIndex.push(i);
		}
	}
	return capitalIndex;
};
console.log(capitals('CodEWaRs'));
