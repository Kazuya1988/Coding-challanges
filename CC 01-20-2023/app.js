// Halving Sum
// Task
// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47
function halvingSum(n) {
	let sum = n;
	for (let i = 1; i <= 25; i++) {
		sum += Math.floor(n / Math.pow(2, i));
	}
	return sum;
}
console.log(halvingSum(127));
