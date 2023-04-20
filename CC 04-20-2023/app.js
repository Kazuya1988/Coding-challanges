// Arrays
// Sum a list but ignore any duplicates
// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.
function sumNoDuplicates(numList) {
	return numList
		.filter((e, i, arr) => arr.indexOf(e) === arr.lastIndexOf(e))
		.reduce((sum, num) => sum + num, 0);
}
console.log(sumNoDuplicates([3, 4, 3, 6]));

// Sort by Last Char
// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.
function last(x) {
	return x.split(' ').sort((a, b) => {
		let lastA = a[a.length - 1];
		let lastB = b[b.length - 1];
		if (lastA === lastB) {
			return x.indexOf(a) - x.indexOf(b);
		}
		return lastA > lastB ? 1 : -1;
	});
	// return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}
console.log(last('man i need a taxi up to ubud'));
