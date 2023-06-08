// Length and two values.
// Given an integer n and two other values, build an array of size n filled with these two values alternating.

// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []
function alternate(n, firstValue, secondValue) {
	return new Array(n).fill([firstValue, secondValue]).flat().slice(0, n);
}
console.log(alternate(9, 'blue', 'red'));
