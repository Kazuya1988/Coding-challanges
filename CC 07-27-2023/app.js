// Exercise in Summing
// Your task is to finish two functions, minimumSum and maximumSum, that take 2 parameters:

// values: an array of integers with an arbitrary length; may be positive and negative
// n: how many integers should be summed; always 0 or bigger
// Example:
const values = [5, 4, 3, 2, 1];
// minimumSum(values, 2); // should return 1+2 = 3
// maximumSum(values, 3); // should return 3+4+5 = 12
// All values given to the functions will be integers. Also take care of the following special cases:

// if values is empty, both functions should return 0
// if n is 0, both functions should also return 0
// if n is larger than values's length, use the length instead.
function minimumSum(values, n) {
	if (!values.length || n === 0) return 0;
	const ascendingOrder = values.slice().sort((a, b) => a - b);
	n = n > values.length ? values.length : n;
	return ascendingOrder.reduce((sum, num, i) => {
		if (i < n) {
			sum += num;
		}
		return sum;
	}, 0);
}

function maximumSum(values, n) {
	if (!values.length || n === 0) return 0;
	const descendingOrder = values.slice().sort((a, b) => b - a);
	n = n > values.length ? values.length : n;
	return descendingOrder.reduce((sum, num, i) => {
		if (i < n) {
			sum += num;
		}
		return sum;
	}, 0);
}
// Clever
// const minimumSum = (values, n) =>
//   values.sort((a, b) => a - b).slice(0, n).reduce((pre, val) => pre + val, 0);
// const maximumSum = (values, n) =>
//   values.sort((a, b) => b - a).slice(0, n).reduce((pre, val) => pre + val, 0);
console.log(minimumSum(values, 2));
console.log(maximumSum(values, 3));
