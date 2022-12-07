// Small enough? - Beginner
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit) {
	return a.every((e) => e <= limit);
}
// console.log(smallEnough([66, 101], 200));

// Largest 5 digit number in a series
// In the following 6 digit number:

// 283910
// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

// Adapted from ProjectEuler.net

function solution(digits) {
	let splittedDig = digits.split('');
	let fiveDig = [];
	for (let i = 0; i < splittedDig.length; i++) {
		fiveDig.push(splittedDig.slice(i, 5 + i));
	}
	let fiveDigNums = fiveDig.map((e) => Number(e.join('')));
	return Math.max(...fiveDigNums);
}
console.log(solution('1234567898765'));
