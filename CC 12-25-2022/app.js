// Greet Me
// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"
const greet = function (name) {
	return `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
};
console.log(greet('riley'));

// Greatest common divisor
// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
function greatestCommonDevisor(x, y) {
	let divisorArray = [];
	for (let i = 1; i <= x; i++) {
		if (x % i === 0 && y % i === 0) {
			divisorArray.push(i);
		}
	}
	return Math.max(...divisorArray);
}
console.log(greatestCommonDevisor(30, 12));
