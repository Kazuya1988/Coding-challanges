// Arrays
// Pluck
// Implement a function which takes a sequence of objects and a property name, and returns a sequence containing the named property of each object.

// For example:

// pluck([{a:1}, {a:2}], 'a')      // -> [1,2]
// pluck([{a:1, b:3}, {a:2}], 'b') // -> [3, undefined]
// If an object is missing the property, you should just leave it as undefined/None in the output array.
function pluck(objs, name) {
	return objs.map((obj) => obj[name]);
}
console.log(pluck([{ a: 1 }, { a: 2 }], 'a'));
console.log(pluck([{ a: 1, b: 3 }, { a: 2 }], 'b'));

// Organize duplicate numbers in list
// Sam is an avid collector of numbers. Every time he finds a new number he throws it on the top of his number-pile. Help Sam organise his collection so he can take it to the International Number Collectors Conference in Cologne.

// Given an array of numbers, your function should return an array of arrays, where each subarray contains all the duplicates of a particular number. Subarrays should be in the same order as the first occurence of the number they contain:

// group([3, 2, 6, 2, 1, 3])
// >>> [[3, 3], [2, 2], [6], [1]]
// Assume the input is always going to be an array of numbers. If the input is an empty array, an empty array should be returned.
function group(arr) {
	if (!arr.length) return [];
	let remDup = [...new Set(arr)];
	return remDup.map((e) => {
		return arr.filter((x) => x === e);
	});
}
console.log(group([3, 2, 6, 2, 1, 3]));
