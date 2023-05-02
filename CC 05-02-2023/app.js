// Arrays
// Maze Runner
// Introduction
// Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
// Task
// You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
// The Maze array will look like

// maze = [[1,1,1,1,1,1,1],
//         [1,0,0,0,0,0,3],
//         [1,0,1,0,1,0,1],
//         [0,0,1,0,0,0,1],
//         [1,0,1,0,1,0,1],
//         [1,0,0,0,0,0,1],
//         [1,2,1,0,1,0,1]]
// ..with the following key

//       0 = Safe place to walk
//       1 = Wall
//       2 = Start Point
//       3 = Finish Point
//   direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
// Rules
// 1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.
// 2. The start and finish positions will change for the final tests.
// 3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.
// 4. If you reach the end point before all your moves have gone, you should return Finish.
// 5. If you hit any walls or go outside the maze border, you should return Dead.
// 6. If you find yourself still in the maze after using all the moves, you should return Lost.
const maze = [
	[1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 3],
	[1, 0, 1, 0, 1, 0, 1],
	[0, 0, 1, 0, 0, 0, 1],
	[1, 0, 1, 0, 1, 0, 1],
	[1, 0, 0, 0, 0, 0, 1],
	[1, 2, 1, 0, 1, 0, 1],
];
const direction = ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E'];
function mazeRunner(maze, directions) {
	let startIndexRow = maze.findIndex((e) => e.includes(2));
	let startIndexColumn = maze[startIndexRow].indexOf(2);
	console.log(startIndexColumn);
	console.log(startIndexRow);
	const rowColumnMovement = directions.map((e) => {
		if (e === 'N') {
			return [startIndexRow--, startIndexColumn];
		} else if (e === 'S') {
			return [startIndexRow++, startIndexColumn];
		} else if (e === 'E') {
			return [startIndexRow, startIndexColumn++];
		} else if (e === 'W') {
			return [startIndexRow, startIndexColumn--];
		}
	});
	console.log(rowColumnMovement);
	return rowColumnMovement.map(([r, c]) => maze[r][c]);
}
console.log(mazeRunner(maze, direction));

// Arrays, Strings
// Insert dashes
// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).
function insertDash(num) {
	let numbers = num.toString().split('');
	let numbersDash = [];
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] % 2 !== 0 && numbers[i + 1] % 2 !== 0) {
			numbersDash.push(numbers[i]);
			numbersDash.push('-');
		} else {
			numbersDash.push(numbers[i]);
		}
	}
	return numbersDash[numbersDash.length - 1] === '-'
		? numbersDash.slice(0, -1).join('')
		: numbersDash.join('');
}
console.log(insertDash(444793));
