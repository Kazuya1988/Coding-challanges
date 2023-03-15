// Dashatize it
// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'
function dashatize(n) {
	n = Math.abs(n);
	let nStr = String(n).split('');
	console.log(nStr);
	let dashNum = [];
	if (!Number.isInteger(n)) {
		return 'NaN';
	} else {
		for (let i = 0; i < nStr.length; i++) {
			if (nStr[i] % 2 !== 0 && nStr[i + 1] % 2 === 0) {
				dashNum.push('-');
				dashNum.push(nStr[i]);
				dashNum.push('-');
			} else if (nStr[i] % 2 !== 0) {
				dashNum.push('-');
				dashNum.push(nStr[i]);
			} else {
				dashNum.push(nStr[i]);
			}
		}
	}
	return dashNum[0] === '-' ? dashNum.slice(1).join('') : dashNum.join('');
}
console.log(dashatize(5311));
