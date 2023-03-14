// Highest Rank Number in an Array
// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
function highestRank(arr) {
	let remDupArray = [...new Set(arr)];
	let numberTimes = remDupArray.map((e) => [
		e,
		arr.filter((el) => e === el).length,
	]);
	let highestNums = numberTimes.reduce((a, b) => (b[1] > a[1] ? b : a));
	return highestNums[0];
	// Clever solution
	// return arr.sort((a,b)=>arr.filter(i=>i===b).length - arr.filter(i=>i===a).length);
}
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));
