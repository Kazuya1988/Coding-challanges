// Simple Encryption #1 - Alternating Split
// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.
function encrypt(text, n) {
	if (!text || !text.length || n <= 0) {
		return text;
	}
	while (n-- > 0) {
		let rightStr = text
			.split('')
			.filter(function (e, i) {
				return i % 2 == 0;
			})
			.join('');
		let leftStr = text
			.split('')
			.filter(function (e, i) {
				return i % 2 == 1;
			})
			.join('');

		text = leftStr + rightStr;
	}
	return text;
}

function decrypt(encryptedText, n) {
	if (!encryptedText || !encryptedText.length || n <= 0) {
		return encryptedText;
	}
	let result = new Array(encryptedText.length);

	while (n--) {
		let j = 0;
		for (let i = 1; i < result.length; i += 2) {
			result[i] = encryptedText[j++];
		}
		for (let i = 0; i < result.length; i += 2) {
			result[i] = encryptedText[j++];
		}
		encryptedText = result.join('');
	}

	return encryptedText;
}
console.log(encrypt('012345', 1));
console.log(decrypt('s eT ashi tist!', 2));
