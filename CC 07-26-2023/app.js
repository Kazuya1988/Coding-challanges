// Last Survivors Ep.2
// Substitute two equal letters by the next letter of the alphabet (two letters convert to one):

// "aa" => "b", "bb" => "c", .. "zz" => "a".
// The equal letters do not have to be adjacent.
// Repeat this operation until there are no possible substitutions left.
// Return a string.

// Example:

// let str = "zzzab"
//     str = "azab"
//     str = "bzb"
//     str = "cz"
// return "cz"
// Notes
// The order of letters in the result is not important.
// The letters "zz" transform into "a".
// There will only be lowercase letters.
function lastSurvivors(str) {
	let arr = str.split('').sort();
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i + 1]) {
			if (arr[i] === 'z') {
				arr.push(String.fromCharCode(97));
			} else {
				arr.push(String.fromCharCode(arr[i].charCodeAt(0) + 1));
			}

			arr.splice(i, 2);
			arr.sort();
			i = -1;
		}
	}

	return arr.join('');
}
console.log(lastSurvivors('abaa'));
