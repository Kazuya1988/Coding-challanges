// search in multidimensional array
// Write a function that gets a sequence and value and returns true/false depending on whether the variable exists in a multidimensional sequence.

// Example:

// locate(['a','b',['c','d',['e']]],'e'); // should return true
// locate(['a','b',['c','d',['e']]],'a'); // should return true
// locate(['a','b',['c','d',['e']]],'f'); // should return false

const locate = (arr, value) => {
	return arr.some((e) => (Array.isArray(e) ? locate(e, value) : e === value));
};
console.log(locate(['a', 'b', ['c', 'd', ['e']]], 'e')); // should return true
console.log(locate(['a', 'b', ['c', 'd', ['e']]], 'a')); // should return true
console.log(locate(['a', 'b', ['c', 'd', ['e']]], 'f')); // should return false
console.log(locate(['two', 'six', ['five', 'seven'], 'three,nine'], 'six')); // should return false
console.log(locate(['two', 'six', ['five', 'seven'], 'three,nine'], 'three')); // should return false
console.log(
	locate(['two', 'six', ['five', 'seven'], 'three,nine'], 'three,nine')
); // should return false
