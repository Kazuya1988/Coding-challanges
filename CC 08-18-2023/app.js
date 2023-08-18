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

// Basics 03: Strings, Numbers and Calculation
// Here you have to do some mathematical operations on a "dirty string". This kata checks some basics, it's not too difficult.

// So what to do?

// Input: String which consists of two positive numbers (doubles) and exactly one operator like +, -, * or / always between these numbers. The string is dirty, which means that there are different characters inside too, not only numbers and the operator. You have to combine all digits left and right, perhaps with "." inside (doubles), and to calculate the result which has to be rounded to an integer and converted to a string at the end.

// Easy example:
// Input: "gdfgdf234dg54gf*23oP42"
// Output: "54929268" (because 23454*2342=54929268)
// First there are some static tests, later on random tests too...
function calculateString(st) {
	let filteredString = st.match(/[0-9*+\-/\.]/g).join('');

	let numbers = filteredString.split(/[\+\-\*\/]/);
	let operators = filteredString.match(/[\+\-\*\/]/g);

	let result = parseFloat(numbers[0]);
	for (let i = 1; i < numbers.length; i++) {
		if (operators[i - 1] === '+') {
			result += parseFloat(numbers[i]);
		} else if (operators[i - 1] === '-') {
			result -= parseFloat(numbers[i]);
		} else if (operators[i - 1] === '*') {
			result *= parseFloat(numbers[i]);
		} else if (operators[i - 1] === '/') {
			result /= parseFloat(numbers[i]);
		}
	}

	return String(Math.round(result));
}
console.log(calculateString('gdfgdf234dg54gf*23oP42'));
console.log(calculateString(';$%§fsdfsd235??df/sdfgf5gh.000kk0000'));
console.log(calculateString('fsdfsd235???34.4554s4234df-sdfgf2g3h4j442'));
