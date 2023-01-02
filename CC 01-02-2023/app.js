// Build a square
// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++
function generateShape(integer) {
	// let vertical = '';
	// let horizontal = '';
	// for(let i = 0; i < integer; i++){
	//     vertical += '+'
	// }
	// for(let i = 0; i < integer; i++){
	//     horizontal += vertical + '\n'
	// }
	// return horizontal.trim();
	let integerArray = [];
	for (let i = 0; i < integer; i++) {
		integerArray.push(i);
	}
	let plusArray = integerArray.map((e) => (e = '+'.repeat(integer))).join('\n');
	return plusArray;
}
console.log(generateShape(5));
