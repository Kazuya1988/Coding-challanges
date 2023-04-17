// Arrays 6kyu
// Decipher this!
// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'
function decipherThis(str) {
	let codesToLetters = str
		.split('')
		.filter((e) => !isNaN(e))
		.join('')
		.split(' ')
		.map((n) => String.fromCharCode(n));
	let reversedLetters = str
		.split('')
		.filter((e) => isNaN(e) || e === ' ')
		.join('')
		.split(' ')
		.map((word) => {
			if (word.length > 1) {
				let firstChar = word.charAt(0);
				let lastChar = word.charAt(word.length - 1);
				let middleChars = word.substring(1, word.length - 1);
				return lastChar + middleChars + firstChar;
			} else {
				return word;
			}
		});
	return reversedLetters.map((e, i) => codesToLetters[i] + e).join(' ');
}
console.log(decipherThis('82yade 115te 103o'));
