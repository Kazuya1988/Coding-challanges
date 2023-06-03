// Arrays
// Help the Fruit Guy
// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.
function removeRotten(bagOfFruits) {
	return bagOfFruits
		? bagOfFruits.map((e) =>
				e.includes('rotten') ? e.slice('rotten'.length).toLowerCase() : e
		  )
		: [];
	// With replace
	// return arr ? arr.map(x=>x.replace('rotten', '').toLowerCase()) : [] ;
}
console.log(removeRotten(['apple', 'rottenBanana', 'apple']));

// Strings

// Complete The Pattern #1
// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

// Note:Returning the pattern is not the same as Printing the pattern.
// Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.
// Pattern:
// 1
// 22
// 333
// ....
// .....
// nnnnnn
// Examples:
// pattern(5):

// 1
// 22
// 333
// 4444
// 55555
// pattern(11):

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// 10101010101010101010
// 1111111111111111111111
// Hint: Use \n in string to jump to next line
function pattern(n) {
	let output = '';
	for (let i = 1; i <= n; i++) {
		output += `${i}`.repeat(i) + '\n';
	}

	return output.trim();
}
console.log(pattern(5));
