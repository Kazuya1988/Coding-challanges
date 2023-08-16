// Create iterator
// Task
// Implement an iterator which receives an array of values, and returns an object with:

// a function next
// a number index
// A call to the next function should return an object with 2 attributes:

// value (the next value in the input array; undefined if the value is not present or the array has been fully processed)
// done (boolean which specifies whether the input array has been fully processed)
// Accessing the index attribute should return the index of the value currently held by the iterator.

// Example:
// const iterator = createIterator(['One', , 'Two']);

// iterator.index  // 0
// iterator.next() // { value: 'One', done: false }
// iterator.index  // 1

// // A hole in the array - value is undefined
// iterator.next() // { value: undefined, done: false }
// iterator.index  // 2

// iterator.next() // { value: 'Two', done: false }
// iterator.index  // 3

// // Iteration has finished - value is undefined, done becomes true
// iterator.next() // { value: undefined, done: true }
// iterator.index  // 3

// // Subsequent calls to next of a fully processed iterator don't change anything
// iterator.next() // { value: undefined, done: true }
// iterator.index  // 3
const createIterator = (array) => {
	return {
		index: 0,
		next: function () {
			if (this.index < array.length) {
				const result = {
					value: array[this.index],
					done: false,
				};
				this.index++;
				return result;
			} else {
				return { value: undefined, done: true }; // Return the last result
			}
		},
	};
};
const array = ['One', , 'Two'];
const iterator = createIterator(array);
console.log(iterator.index);
console.log(iterator.next());
console.log(iterator.index);
console.log(iterator.next());
console.log(iterator.index);
console.log(iterator.next());
console.log(iterator.index);
console.log(iterator.next());
console.log(iterator.index);
console.log(iterator.next());
