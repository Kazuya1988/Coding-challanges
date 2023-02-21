// Mexican Wave
// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
function wave(str) {
	// let newArr = [];
	// for (let i = 0; i < str.length; i++) {
	// 	let copy = str.split('');
	// 	if (copy[i] !== ' ') {
	// 		copy[i] = copy[i].toUpperCase();
	// 		newArr.push(copy.join(''));
	// 	}
	// }
	// return newArr;
	return str
		.split('')
		.map((e, i) => {
			if (e === ' ') {
				return e;
			} else {
				return str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
			}
		})
		.filter((word) => word !== ' ');
}
console.log(wave('two words'));
// Should return ['Two words,tWo words,twO words,two Words,two wOrds,two woRds,two worDs,two wordS']

// PREP
// P: String will always be lowercase, but it can be empty.
// R: The result should return an Array were each string in array should have one upperCase letter
// E: wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
