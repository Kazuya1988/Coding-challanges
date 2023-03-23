// Arrays
// Matrix Addition
// Write a function that accepts two square matrices (N x N two dimensional arrays), and return the sum of the two. Both matrices being passed into the function will be of size N x N (square), containing only integers.

// How to sum two matrices:

// Take each cell [n][m] from the first matrix, and add it with the same [n][m] cell from the second matrix. This will be cell [n][m] of the solution matrix.

// Visualization:

// |1 2 3|     |2 2 1|     |1+2 2+2 3+1|     |3 4 4|
// |3 2 1|  +  |3 2 3|  =  |3+3 2+2 1+3|  =  |6 4 4|
// |1 1 1|     |1 1 3|     |1+1 1+1 1+3|     |2 2 4|
// Example
// matrixAddition(
//   [ [1, 2, 3],
//     [3, 2, 1],
//     [1, 1, 1] ],
// //      +
//   [ [2, 2, 1],
//     [3, 2, 3],
//     [1, 1, 3] ] )

// // returns:
//   [ [3, 4, 4],
//     [6, 4, 4],
//     [2, 2, 4] ]
function matrixAddition(a, b) {
	// const nums = [];
	// for (let i = 0; i < a[0].length; i++) {
	// 	for (let j = 0; j < a[0].length; j++) {
	// 		nums.push(a[i][j] + b[i][j]);
	// 	}
	// }
	// const numsPerGroup = Math.ceil(nums.length / a[0].length);
	// const result = Array(a[0].length)
	// 	.fill('')
	// 	.map((_, i) => nums.slice(i * numsPerGroup, (i + 1) * numsPerGroup));
	// return result;
	// Smart solution
	return a.map((row, rowIndex) =>
		row.map((value, columnIndex) => value + b[rowIndex][columnIndex])
	);
}
console.log(
	matrixAddition(
		[
			[1, 2, 3],
			[3, 2, 1],
			[1, 1, 1],
		],
		[
			[2, 2, 1],
			[3, 2, 3],
			[1, 1, 3],
		]
	)
);