// Does array x contain all values within array y?
// We want to extend the array class so that it provides a contains_all? method. This method will always assume that an array is passed in and will return true if all values in the passed in array are present within the current array.

// For example:

// items.containsAll([1, 2, 3]);  =>  true
// items.containsAll([1, 5, 13]);  =>  false // because 13 is not in the items array
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Object.defineProperty(Array.prototype, 'containsAll', {
	value: function containsAll(a) {
		return a.every((e) => this.includes(e));
	},
});
console.log(items.containsAll([1, 2, 3]));

// Consonant value
// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
function solve(s) {
	const separator = /[aeiou]/g;
	const arrOfSubstrings = s.split(separator);
	const consonantValues = arrOfSubstrings
		.map((e) => e.split('').map((x) => x.charCodeAt() - 96))
		.map((y) => y.reduce((sum, num) => sum + num, 0));

	return Math.max(...consonantValues);
	//  s.split(/[aeiou]+/).reduce((s,n)=> Math.max(s, n.split('').reduce((a,b)=> a + b.charCodeAt(0)-96,0 )), 0);
}
console.log(solve('zodiacs'));
console.log(solve('strength'));
console.log('a'.charCodeAt() - 96);
