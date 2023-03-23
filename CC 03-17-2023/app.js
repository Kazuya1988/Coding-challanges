// Return the Missing Element
// Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

// Examples:
// [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
// [9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3
function getMissingElement(arr) {
	let sortedArr = arr.sort((a, b) => a - b).filter((e, i) => e === i);
	let missingNum = sortedArr[sortedArr.length - 1] + 1;
	return missingNum ? missingNum : 0;
	// Smart solution
	// return arr.reduce(function (sum, value) {return sum - value;}, 45);
}
console.log(getMissingElement([3, 8, 5, 9, 6, 7, 4, 2, 1]));