// Inside Out Strings
// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

// If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

// An example should clarify:

// 'taxi' would become 'atix' 'taxis' would become 'atxsi'
function insideOut(x) {
	let words = x.split(' ');
	return words
		.map((w) => {
			const leftSide = w
				.slice(0, Math.floor(w.length / 2))
				.split('')
				.reverse()
				.join('');
			const rightSide = w
				.slice(Math.floor(w.length / 2))
				.split('')
				.reverse()
				.join('');
			const mid = w.slice(Math.floor(w.length / 2))[0];
			if (w.length % 2 === 0) {
				return leftSide + rightSide;
			} else {
				return w.length <= 3
					? w
					: leftSide +
							mid +
							w
								.slice(Math.floor(w.length / 2 + 1))
								.split('')
								.reverse()
								.join('');
			}
		})
		.join(' ');
}
console.log(insideOut('taxi'));
console.log(insideOut('taxis'));
console.log(insideOut('man i need a taxi up to ubud')); // 'man i ende a atix up to budu'
console.log(insideOut('what time are we climbing up the volcano')); // 'hwta item are we milcgnib up the lovcona'
