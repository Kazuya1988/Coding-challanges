// Filter unused digits
// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.
function unusedDigits() {
	const sortedArr = [...arguments].join('').split('').sort();
	const missing = [];
	for (let i = 0; i <= 9; i++) {
		if (!sortedArr.includes(i.toString())) {
			missing.push(i);
		}
	}
	return missing.join('');
}
console.log(unusedDigits([12, 34, 56, 78]));
console.log(unusedDigits([2015, 8, 26]));

// Strings
// Nickname Generator
// Nickname Generator

// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

// If the 3rd letter is a consonant, return the first 3 letters.

// nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"
// If the 3rd letter is a vowel, return the first 4 letters.

// nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"
// If the string is less than 4 characters, return "Error: Name too short".

// Notes:

// Vowels are "aeiou", so discount the letter "y".
// Input will always be a string.
// Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
// The input can be modified
function nicknameGenerator(name) {
	if (name.length < 4) return 'Error: Name too short';
	return 'aeiou'.includes(name[2]) ? name.slice(0, 4) : name.slice(0, 3);
}
console.log(nicknameGenerator('Robert'));
console.log(nicknameGenerator('Gregory'));
console.log(nicknameGenerator('Sam'));
