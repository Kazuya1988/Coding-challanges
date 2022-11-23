// Breaking chocolate problem
// Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

// For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

// If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.
function breakChocolate(n, m) {
	return n && m ? n * m - 1 : 0;
}
console.log(breakChocolate(5, 5));

// Find the stray number
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3
function stray(numbers) {
	// Solution 1 : Clever - using (^) is a bitwise XOP operator and compares the numbers at a binary level
	// Because the array is odd-length, all equal pairs cancel each other. The only number remaining is the stray number.
	// return numbers.reduce((a,b) => a ^ b);
	// Solution 2
	for (var i in numbers) {
		if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
			return numbers[i];
		}
	}
}
console.log(stray([17, 17, 3, 17, 17, 17, 17]));
