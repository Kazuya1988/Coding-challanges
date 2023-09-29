// Sort odd and even numbers in different order
// You are given an array of integers. Your task is to sort odd numbers within the array in ascending order, and even numbers in descending order.

// Note that zero is an even number. If you have an empty array, you need to return it.

// For example:

// [5, 3, 2, 8, 1, 4]  -->  [1, 3, 8, 4, 5, 2]

// odd numbers ascending:   [1, 3,       5   ]
// even numbers descending: [      8, 4,    2]
function sortArray(arr) {
	const odd = arr.filter((e) => e % 2).sort((a, b) => a - b);
	const even = arr.filter((e) => e % 2 === 0).sort((a, b) => b - a);
	const sorted = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sorted.push(even.shift());
		} else {
			sorted.push(odd.shift());
		}
	}
	return sorted;
	// Sorter
	// return arr.map((x) => x % 2 ? odd.shift() : even.shift());
}
console.log(sortArray([5, 3, 2, 8, 1, 4]));
