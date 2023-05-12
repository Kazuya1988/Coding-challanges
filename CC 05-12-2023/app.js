// Arrays
// Is Integer Array?
// Write a function with the signature shown below:

// function isIntArray(arr) {
//   return true
// }
// returns true  / True if every element in an array is an integer or a float with no decimals.
// returns true  / True if array is empty.
// returns false / False for every other input.
function isIntArray(arr) {
	if (!Array.isArray(arr)) return false;
	return arr.every((e) => Number.isInteger(e));
}
console.log(isIntArray([]));
console.log(isIntArray([1, 2, 3, 4]));
console.log(isIntArray([1, 2, 3, NaN]));
console.log(isIntArray([-11, -12, -13, -14]));
