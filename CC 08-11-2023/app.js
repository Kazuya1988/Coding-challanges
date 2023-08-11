// Wave Sorting
// A list of integers is sorted in “Wave” order if alternate items are not less than their immediate neighbors (thus the other alternate items are not greater than their immediate neighbors).

// Thus, the array [4, 1, 7, 5, 6, 2, 3] is in Wave order because 4 >= 1, then 1 <= 7, then 7 >= 5, then 5 <= 6, then 6 >= 2, and finally 2 <= 3.

// The wave-sorted lists has to begin with an element not less than the next, so [1, 4, 5, 3] is not sorted in Wave because 1 < 4

// Your task is to implement a function that takes a list of integers and sorts it into wave order in place; your function shouldn't return anything.

// Note:

// The resulting array shouldn't necessarily match anyone in the tests, a function just checks if the array is now wave sorted.
const array = [1, 2, 34, 4, 5, 5, 5, 65, 6, 65, 5454, 4];
const arrayTwo = [
	23, 84, 2, 87, 91, 63, 74, 4, 1, 13, 95, 99, 99, 84, 60, 26, 53, 41, 15, 97,
	44, 57, 72, 13, 11, 90, 73, 41, 3,
];
function waveSort(arr) {
	for (let i = 0; i < arr.length; i += 2) {
		if (i > 0 && arr[i] < arr[i - 1]) {
			// Swap the current element with the previous one
			let temp = arr[i];
			arr[i] = arr[i - 1];
			arr[i - 1] = temp;
		}
		if (i < arr.length - 1 && arr[i] < arr[i + 1]) {
			// Swap the current element with the next one
			let temp = arr[i];
			arr[i] = arr[i + 1];
			arr[i + 1] = temp;
		}
	}
}
waveSort(array);
waveSort(arrayTwo);
console.log(array);
console.log(arrayTwo);
