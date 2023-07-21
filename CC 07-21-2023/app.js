// Custom Array Filters
// Dave has a lot of data he is required to apply filters to, which are simple enough, but he wants a shorter way of doing so.

// He wants the following functions to work as expected:

// even    // [1,2,3,4,5].even() should return [2,4]
// odd     // [1,2,3,4,5].odd() should return [1,3,5]
// under   // [1,2,3,4,5].under(4) should return [1,2,3]
// over    // [1,2,3,4,5].over(4) should return [5]
// inRange // [1,2,3,4,5].inRange(1,3) should return [1,2,3]
// They should also work when used together, for example:

// [1,2,18,19,20,21,22,30,40,50,100].even().inRange(18,30) // should return [18, 20, 22, 30]
// And finally the filters should only accept integer values from an array, for example:

// ["a", 1, "b", 300, "x", "q", 63, 122, 181, "z", 0.83, 0.11].even() // should return [300, 122]
// Note: List with non-numbers will be tested as well.
Array.prototype.even = function () {
	return this.filter((e) => e % 2 === 0 && Number.isInteger(e));
};

Array.prototype.odd = function () {
	return this.filter((e) => e % 2 !== 0 && Number.isInteger(e));
};

Array.prototype.under = function (x) {
	return this.filter((e) => e < x && Number.isInteger(e));
};

Array.prototype.over = function (x) {
	return this.filter((e) => e > x && Number.isInteger(e));
};

Array.prototype.inRange = function (min, max) {
	return this.filter((e) => e >= min && e <= max && Number.isInteger(e));
};
console.log([1, 2, 3, 4, 5].even()); // should return [2,4]
console.log([1, 2, 3, 4, 5].odd()); // should return [1,3,5]
console.log([1, 2, 3, 4, 5].under(4)); // should return [1,2,3]
console.log([1, 2, 3, 4, 5].over(4)); // should return [5]
console.log([1, 2, 3, 4, 5].inRange(1, 3)); //should return [1,2,3]
console.log(['a', 1, 'b', 300, 'x', 'q', 63, 122, 181, 'z', 0.83, 0.11].even());
console.log([1, 2, 18, 19, 20, 21, 22, 30, 40, 50, 100].even().inRange(18, 30));
console.log(
	[
		8,
		4,
		12.01,
		'a',
		'0',
		123.2,
		'c',
		14,
		3,
		5,
		9,
		11,
		10,
		'9',
		1,
		'b',
		1.2,
		0.1,
		6,
		'1',
		12,
		7,
		2,
	].odd()
);

// Strings
// Kebabize
// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters
function kebabize(str) {
	let remNum = str.split('').filter((e) => isNaN(e));
	let result = '';
	for (let i = 0; i < remNum.length; i++) {
		if (remNum[i] === remNum[i].toUpperCase()) {
			result += '-' + remNum[i].toLowerCase();
		} else {
			result += remNum[i];
		}
	}
	return result[0] === '-' ? result.slice(1) : result;
}
console.log(kebabize('myCamelCasedString'));
console.log(kebabize('myCamelHas3Humps'));
console.log(kebabize('Rl3cS'));
