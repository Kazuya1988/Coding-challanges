// Calculate number of inversions in array
// Array inversion indicates how far the array is from being sorted.

// Inversions are pairs of elements in array that are out of order.

// Examples
// [1, 2, 3, 4]  =>  0 inversions
// [1, 3, 2, 4]  =>  1 inversion: 2 and 3
// [4, 1, 2, 3]  =>  3 inversions: 4 and 1, 4 and 2, 4 and 3
// [4, 3, 2, 1]  =>  6 inversions: 4 and 3, 4 and 2, 4 and 1, 3 and 2, 3 and 1, 2 and 1
// Goal
// The goal is to come up with a function that can calculate inversions for any arbitrary array
// Calculate the number of inversions in array
function countInversions(array) {
	let count = 0;
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[i] > array[j + i]) {
				count++;
			}
		}
	}
	return count;
}

console.log(countInversions([1, 2, 3, 4]));
console.log(countInversions([1, 3, 2, 4]));
console.log(countInversions([4, 1, 2, 3]));
console.log(countInversions([4, 3, 2, 1]));
