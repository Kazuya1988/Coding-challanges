// Largest Elements
// Write a program that outputs the top n elements from a list.
function largest(n, array) {
	return n ? array.sort((a, b) => a - b).slice(-n) : [];
}

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
