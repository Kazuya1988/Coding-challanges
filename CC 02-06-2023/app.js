// Bit counting
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
function countBits(n) {
	let nToBits = n.toString(2);
	return nToBits.split('').filter((e) => e === '1').length;
	//   return   nToBits.split('0').join('').length;
}
console.log(countBits(9));
