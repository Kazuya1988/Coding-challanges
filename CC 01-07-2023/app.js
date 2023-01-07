// Digits explosion
// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312")
// should return :

// "333122"
// explode("102269")
// should return :

// "12222666666999999999"
function explode(s) {
	let result = '';
	for (let i = 0; i < s.length; i++) {
		result += s[i].repeat(Number(s[i]));
	}
	return result;
	// return s.split("").map((e) => e.repeat(+e)).join("");
}
console.log(explode('102269'));

// Gauß needs help! (Sums of a lot of numbers).
// Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. Büttner, to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers from 1 through a given number n.

// Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; so, he can astonish his teacher and rescue his recreation interval.

// Here's, an example:

// f(n=100) // returns 5050
// It's your duty to verify that n is a valid positive integer number. If not, please, return false (None for Python, null for C#, 0 for COBOL).

// Note: the goal of this kata is to invite you to think about some 'basic' mathematic formula and how you can do performance optimization on your code.

// Advanced - experienced users should try to solve it in one line, without loops, or optimizing the code as much as they can.
function f(n) {
	// The Gauss sum formula
	return Number.isInteger(n) ? (n * (n + 1)) / 2 : false;
}
console.log(f(100));
