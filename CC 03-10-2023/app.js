// Encrypt this!
// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"
function encryptThis(text) {
	return text
		.split(' ')
		.map((e) =>
			e
				.split('')
				.map((x, i) => {
					if (i === 0) return String(x.charCodeAt(0));
					if (i === 1) return e[e.length - 1];
					if (i === e.length - 1) return e[1];
					else return x;
				})
				.join('')
		)
		.join(' ');
}
console.log(encryptThis('Hello World'));
