// Bit counting
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
function countBits(n) {
	let nToBits = n.toString(2);
	return nToBits.split('').filter((e) => e === '1').length;
	//   return   nToBits.split('0').join('').length;
}
console.log(countBits(9));

// Counting Duplicates
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
function duplicateCount(text) {
	let lower = text.toLowerCase();
	let count = 0;
	let used = [];
	lower.split('').forEach((letter) => {
		if (!used.includes(letter) && lower.split(letter).length - 1 > 1) {
			count++;
			used.push(letter);
		}
	});

	return count;

	// return text.toLowerCase().split('').filter(function(val, i, arr){
	//     return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
	//   }).length;
}
console.log(duplicateCount('aA11'));
