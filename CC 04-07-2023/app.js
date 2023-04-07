// Sum of Odd Cube Numbers
// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
function cubeOdd(arr) {
	return arr.every((e) => Number.isInteger(e))
		? arr
				.filter((e) => e % 2)
				.map((n) => n ** 3)
				.reduce((sum, num) => sum + num, 0)
		: undefined;
}
console.log(cubeOdd([1, 2, 3, 4]));
