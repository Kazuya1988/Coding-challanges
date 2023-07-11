// I need more speed!
// Write a function that will take in any array and reverse it.

// Sounds simple doesn't it?

// NOTES:

// Array should be reversed in place! (no need to return it)
// Usual builtins have been deactivated. Don't count on them.
// You'll have to do it fast enough, so think about performances
function reverse(arr) {
	for (let i = 0; i < Math.floor(arr.length / 2); i++) {
		let temp = arr[i];
		// let curr = arr[arr.length  - i - 1];
		arr[i] = arr[arr.length - i - 1];
		arr[arr.length - i - 1] = temp;
	}
	return arr;
}
console.log(reverse([1, 2, 3, 4, 5]));
console.log(reverse(['?', 'you', 'are', 'how', 'world', 'hello']));
