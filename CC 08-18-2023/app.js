// Vowels Back
// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.
function vowelBack(s) {
	let result = '';
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const moved = 'vkbaafpqistuvwnyzabtpvfghi';
	for (let i = 0; i < s.length; ++i) result += moved[alphabet.indexOf(s[i])];
	return result;
}
console.log(vowelBack('testcase'));
