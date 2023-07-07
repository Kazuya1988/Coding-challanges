// Framed Reflection

// You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

// 'Hello World'

// would give:

// Words in your solution should be left-aligned.
function mirror(text) {
	const reversedText = text
		.split(' ')
		.reverse()
		.map((e) => e.split('').reverse('').join(''));
	const mirrorText = [];
	const maxLength = Math.max(...reversedText.map((e) => e.length));

	mirrorText.push('*'.repeat(maxLength + 4) + '\n');
	for (let i = reversedText.length - 1; i >= 0; i--) {
		mirrorText.push(
			`* ${reversedText[i]} ${' '.repeat(
				maxLength - reversedText[i].length
			)}*\n`
		);
	}
	mirrorText.push('*'.repeat(maxLength + 4));

	return mirrorText.join('');
}
// '*********\n* olleH *\n* dlroW *\n*********')
console.log(mirror('Hello World'));
// '************\n* srawedoC *\n************')
console.log(mirror('Codewars'));
