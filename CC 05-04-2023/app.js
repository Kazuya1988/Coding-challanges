// Arrays, Strings
// String Array Duplicates
// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.
function dup(s) {
	// return s
	// 	.map((e) => e.split(''))
	// 	.map((x) =>
	// 		x.reduce((prev, curr, i, arr) => {
	// 			if (curr !== arr[i - 1]) {
	// 				prev.push(curr);
	// 			}
	// 			return prev;
	// 		}, [])
	// 	)
	// 	.map((y) => y.join(''));
	return s.map((w) =>
		w
			.split('')
			.filter((c, i, arr) => c !== arr[i - 1])
			.join('')
	);
}
console.log(
	dup(['ccooddddddewwwaaaaarrrrsssss', 'piccaninny', 'hubbubbubboo'])
);
