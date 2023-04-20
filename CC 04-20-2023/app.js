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
