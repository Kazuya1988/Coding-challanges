// Divide and Conquer
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.
function divCon(x) {
	let numbersArr = x.filter((e) => typeof e === 'number');
	let stringsArr = x.filter((e) => typeof e === 'string');
	let sumOfNumbers = numbersArr.reduce((acc, num) => acc + num, 0);
	let sumOfStrings = stringsArr.map(Number).reduce((acc, num) => acc + num, 0);
	return sumOfNumbers - sumOfStrings;
}
console.log(divCon([9, 3, '7', '3']));
