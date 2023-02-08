// Duplicate Encoder
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
function duplicateEncode(word) {
	return word
		.toLowerCase()
		.split('')
		.map((e, i, arr) => {
			return arr.indexOf(e) === arr.lastIndexOf(e) ? '(' : ')';
		})
		.join('');
}
console.log(duplicateEncode('Success'));

// Take a Ten Minutes Walk
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
function isValidWalk(walk) {
	let [n, s, w, e] = Array(4).fill(0);
	for (let i = 0; i < walk.length; i++) {
		if (walk[i] === 'n') n++;
		if (walk[i] === 's') s++;
		if (walk[i] === 'w') w++;
		if (walk[i] === 'e') e++;
	}
	return walk.length === 10 && n === s && w === e;
}
console.log(isValidWalk(['n', 's']));
