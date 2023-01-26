// // 16 + 18 = 214
// For this kata you will have to forget how to add two numbers.

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.
/* Examples : 26
              39
             515                   
*/
function add(num1, num2) {
	let num1Arr = String(num1).split('').map(Number);
	let num2Arr = String(num2).split('').map(Number);
	let sum = [];
	while (num1Arr.length < num2Arr.length) {
		num1Arr.unshift(0);
	}
	while (num1Arr.length > num2Arr.length) {
		num2Arr.unshift(0);
	}
	for (let i = 0; i < num1Arr.length; i++) {
		sum.push(num1Arr[num1Arr.length - i - 1] + num2Arr[num2Arr.length - i - 1]);
	}
	return +sum.reverse().join('');
}
console.log(add(26, 39));
