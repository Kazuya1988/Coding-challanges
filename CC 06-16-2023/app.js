// Arrays Similar
// Write a function that determines whether the passed in sequences are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

let arr1 = [1, 2, 2, 3, 4],
	arr2 = [2, 1, 2, 4, 3],
	arr3 = [1, 2, 3, 4],
	arr4 = [1, 2, 3, '4'],
	arr5 = [1, 2, 2, 3],
	arr6 = [3, 3, 2, 1];
function arraysSimilar(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	const arr1Sorted = arr1.slice().sort();
	const arr2Sorted = arr2.slice().sort();
	for (let i = 0; i < arr1Sorted.length; i++) {
		if (arr1Sorted[i] === arr2Sorted[i]) {
			continue;
		} else {
			return false;
		}
	}
	return true;
	// Clever
	// return JSON.stringify(arr1.slice().sort()) === JSON.stringify(arr2.slice().sort());
	// Also Clever
	// arr1.sort();arr2.sort();
	// return arr1.length===arr2.length&&arr1.every((a,i)=>a===arr2[i])
}
console.log(arraysSimilar(arr1, arr2)); // Should equal true
console.log(arraysSimilar(arr2, arr3)); // Should equal false
console.log(arraysSimilar(arr3, arr4)); // Should equal false
console.log(arraysSimilar(arr5, arr6)); // Should equal false
