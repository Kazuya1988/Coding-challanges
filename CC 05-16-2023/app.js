// Arrays
// zipWith
// zipWith ( or zip_with ) takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
// The function value is one new array.

// If the arrays are of unequal length, the output will only be as long as the shorter one.
// (Values of the longer array are simply not used.)

// Inputs should not be modified.

// Examples
// zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
// zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

// zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both forms are valid
// zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both are functions
// Input validation
// Assume all input is valid.
function zipWith(fn, a0, a1) {
	let array = Math.min(a0.length, a1.length);
	let result = [];
	for (let i = 0; i < array; i++) {
		result.push(fn(a0[i], a1[i]));
	}
	return result;
}

console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]));
console.log(zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1]));

// Strings
// CamelCase Method
// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
String.prototype.camelCase = function () {
	return this.split(' ')
		.map((e) => e.charAt(0).toUpperCase() + e.slice(1))
		.join('');
};
console.log('hello case'.camelCase());
console.log(''.camelCase());
