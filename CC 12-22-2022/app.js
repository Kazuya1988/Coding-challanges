// Factorial
// Your task is to write function factorial.
function factorial(n) {
	let result = 1;
	for (let i = 1; i <= n; i++) {
		result *= i;
	}
	return result;
}
console.log(factorial(1));
