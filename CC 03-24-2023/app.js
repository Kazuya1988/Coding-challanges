// // Arrays
// Street Fighter 2 - Character Selection
// The Kata
// You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid. Such screen looks like this:
// Selection Grid Layout in text:

// | Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
// | Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
// Input

// the list of game characters in a 2x6 grid;
// the initial position of the selection cursor (top-left is (0,0));
// a list of moves of the selection cursor (which are up, down, left, right);
// Output

// the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, whether successful or not, see tests);
// Rules

// Selection cursor is circular horizontally but not vertically!

// As you might remember from the game, the selection cursor rotates horizontally but not vertically; that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost (examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.

// Instead, if I try to go further up from the upmost or further down from the downmost, I'll just stay where I am located (examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).

// Test

// For this easy version the fighters grid layout and the initial position will always be the same in all tests, only the list of moves change.

// Notice: changing some of the input data might not help you.

// Examples

// fighters = [
//   ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//   ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ]
// initial_position = (0,0)
// moves = ['up', 'left', 'right', 'left', 'left']
// then I should get:

// ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
// as the characters I've been hovering with the selection cursor during my moves. Notice: Ryu is the first just because it "fails" the first up See test cases for more examples.
function streetFighterSelection(fighters, position, moves) {
	// Hard coded
	let result = [];

	moves.forEach(function (move) {
		if (move === 'up') {
			position[0] = 0;
		} else if (move === 'down') {
			position[0] = 1;
		} else if (move === 'right') {
			position[1] = position[1] === 5 ? 0 : position[1] + 1;
		} else if (move === 'left') {
			position[1] = position[1] === 0 ? 5 : position[1] - 1;
		}

		result.push(fighters[position[0]][position[1]]);
	});

	return result;
	// Clever using destructuring
	// const boundY = fighters.length - 1;
	// const boundX = fighters[0].length - 1;

	// let [y, x] = position;

	// const controls = {
	//   right: () => x === boundX ? x = 0 : x++,
	//   left: () => x ? x-- : x = boundX,
	//   up: () => y ? y-- : y,
	//   down: () => y < boundY ? y++ : y
	// };

	// return moves.map(move => {
	//   controls[move]();
	//   return fighters[y][x];
	// });

	// Using Modulo
	// return moves.map(move => {
	// 	if (move === 'up')    i = Math.max(i - 1, 0);
	// 	if (move === 'down')  i = Math.min(i + 1, 1);
	// 	if (move === 'left')  j = (j - 1 + 6) % 6;
	// 	if (move === 'right') j = (j + 1 + 6) % 6;

	// 	return fighters[i][j];
	//   });
}
console.log(
	streetFighterSelection(
		[
			['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
			['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
		],
		[0, 0],
		['up', 'left', 'right', 'left', 'left']
	)
);
