// Filter unused digits
// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.
function unusedDigits() {
	const sortedArr = [...arguments].join('').split('').sort();
	const missing = [];
	for (let i = 0; i <= 9; i++) {
		if (!sortedArr.includes(i.toString())) {
			missing.push(i);
		}
	}
	return missing.join('');
}
console.log(unusedDigits([12, 34, 56, 78]));
console.log(unusedDigits([2015, 8, 26]));
