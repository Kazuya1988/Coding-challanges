// Arrays
// Sort Arrays (Ignoring Case)
// Sort the given array of strings in alphabetical order, case insensitive. For example:

// ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
// ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

// input: names - unsorted strings
// output: case-agnostic sort
const sortme = function (names) {
	const sorted = names
		.slice()
		.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
	return sorted;
};
console.log(sortme(['Hello', 'there', "I'm", 'fine']));
console.log(sortme(['CodeWars']));
console.log(sortme(['Old', 'old']));
