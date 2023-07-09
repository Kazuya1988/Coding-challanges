// Bowling Pins
// Mount the Bowling Pins!
// Task:
// Did you ever play Bowling? Short: You have to throw a bowl into 10 Pins arranged like this:

// I I I I  # each Pin has a Number:    7 8 9 10
//  I I I                                4 5 6
//   I I                                  2 3
//    I                                    1

// You will get an Array with Numbers, e.g.: [3,5,9] and remove them from the field like this:

// I I   I
//  I   I
//   I
//    I

// Return a string with the current field.

// Note that:
// String.prototype.replace() is not allowed!

// You begin a new line with \n
// Each Line must be 7 chars long
// Fill the missing pins with a whitespace
function bowlingPins(arr) {
	return [[7, 8, 9, 10], [4, 5, 6], [2, 3], [1]]
		.map(
			(row, i) =>
				' '.repeat(i) +
				row.map((n) => (!arr.includes(n) ? 'I' : ' ')).join(' ') +
				' '.repeat(i)
		)
		.join('\n');
}
console.log(bowlingPins([2, 3]));
console.log(bowlingPins([1, 2, 10]));
