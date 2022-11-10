// String ends with?
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
	return str.endsWith(ending);
}
// console.log(solution('abc', 'bc'))
// console.log(solution('abc', 'd'))

// Is this a triangle?

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
	let p = (a + b + c) / 2;
	if (p <= a || p <= b || p <= c) return false;
	else return true;
	// Other solution
	// return a + b > c && a + c > b && c + b > a;
}

console.log(isTriangle(7, 2, 2));
