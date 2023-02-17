// Sort the odd
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
function sortArray(array) {
	let oddNumbers = array.filter((n) => n % 2 !== 0).sort((a, b) => a - b);
	return array.map((e) => (e % 2 !== 0 ? (e = oddNumbers.shift()) : e));
}
console.log(sortArray([5, 8, 6, 3, 4]));

// Split Strings
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']
function solution(str) {
	let strSplitted = str.split('');
	if (strSplitted.length % 2 !== 0) {
		strSplitted.push('_');
	}
	let resultArr = [];
	for (let i = 0; i < strSplitted.length; i++) {
		let newArr = [];
		newArr.push(strSplitted[i] + strSplitted[i + 1]);
		resultArr.push(newArr.join(''));
	}
	return resultArr.filter((e, i) => i % 2 === 0);
}
console.log(solution('abc'));
