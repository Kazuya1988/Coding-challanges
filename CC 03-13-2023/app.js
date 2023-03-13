// The Vowel Code
// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
function encode(string) {
	let vowels = {
		a: 1,
		e: 2,
		i: 3,
		o: 4,
		u: 5,
	};
	return string
		.split('')
		.map((e) => vowels[e] || e)
		.join('');
	// Using Switch case
	// let result = '';
	// for (let i = 0; i < string.length; i++) {
	// 	switch (string[i]) {
	// 		case 'a':
	// 			result += 1;
	// 			break;
	// 		case 'e':
	// 			result += 2;
	// 			break;
	// 		case 'i':
	// 			result += 3;
	// 			break;
	// 		case 'o':
	// 			result += 4;
	// 			break;
	// 		case 'u':
	// 			result += 5;
	// 			break;
	// 		default:
	// 			result += string[i];
	// 	}
	// }
	// return result;
}
function decode(string) {
	let vowels = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
	return string
		.split('')
		.map((e) => vowels[e] || e)
		.join('');
	// Using switch case
	// let result = '';
	// for (let i = 0; i < string.length; i++) {
	// 	switch (string[i]) {
	// 		case '1':
	// 			result += 'a';
	// 			break;
	// 		case '2':
	// 			result += 'e';
	// 			break;
	// 		case '3':
	// 			result += 'i';
	// 			break;
	// 		case '4':
	// 			result += 'o';
	// 			break;
	// 		case '5':
	// 			result += 'u';
	// 			break;
	// 		default:
	// 			result += string[i];
	// 	}
	// }
	// return result;
}
console.log(encode('hello'));
console.log(decode('h3 th2r2'));
