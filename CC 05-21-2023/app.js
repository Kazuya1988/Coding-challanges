// Arrays
// Pascal's Triangle #2
// Here you will create the classic Pascal's triangle.
// Your function will be passed the depth of the triangle and your code has to return the corresponding Pascal's triangle up to that depth.

// The triangle should be returned as a nested array. For example:

// pascal(5) -> [ [1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1] ]
// To build the triangle, start with a single 1 at the top, for each number in the next row you just take the two numbers above it and add them together, except for the edges, which are all 1. e.g.:

//       1
//     1   1
//   1   2   1
function pascal(depth) {
	let result = [];
	for (let i = 1; i <= depth; ++i) {
		let row = [];
		for (let j = 0; j < i; ++j) {
			row.push(
				j == 0 || j == i - 1 ? 1 : result[i - 2][j - 1] + result[i - 2][j]
			);
		}
		result.push(row);
	}
	return result;
}
console.log(pascal(5));
