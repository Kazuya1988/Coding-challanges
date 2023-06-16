// Arrays Similar
// Write a function that determines whether the passed in sequences are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

let arr1 = [1, 2, 2, 3, 4],
	arr2 = [2, 1, 2, 4, 3],
	arr3 = [1, 2, 3, 4],
	arr4 = [1, 2, 3, '4'],
	arr5 = [1, 2, 2, 3],
	arr6 = [3, 3, 2, 1];
function arraysSimilar(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	const arr1Sorted = arr1.slice().sort();
	const arr2Sorted = arr2.slice().sort();
	for (let i = 0; i < arr1Sorted.length; i++) {
		if (arr1Sorted[i] === arr2Sorted[i]) {
			continue;
		} else {
			return false;
		}
	}
	return true;
	// Clever
	// return JSON.stringify(arr1.slice().sort()) === JSON.stringify(arr2.slice().sort());
	// Also Clever
	// arr1.sort();arr2.sort();
	// return arr1.length===arr2.length&&arr1.every((a,i)=>a===arr2[i])
}
// console.log(arraysSimilar(arr1, arr2)); // Should equal true
// console.log(arraysSimilar(arr2, arr3)); // Should equal false
// console.log(arraysSimilar(arr3, arr4)); // Should equal false
// console.log(arraysSimilar(arr5, arr6)); // Should equal false

// Reverse or rotate?
// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:
// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> ""
// revrot("563000655734456948", 4) --> "0365065073456944"
// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".
function revrot(str, sz) {
	if (sz <= 0 || str === '' || sz > str.length) return '';
	let chunks = [];
	for (let i = 0; i < str.length; i += sz) {
		chunks.push(str.slice(i, i + sz));
	}
	console.log(chunks);
	let sumOfCubedChunks = chunks.map((e) =>
		e
			.split('')
			.map((x) => Math.pow(x, 3))
			.reduce((sum, num) => sum + num, 0)
	);
	console.log(sumOfCubedChunks);
	let modifiedChunks = [];
	for (let i = 0; i < chunks.length; i++) {
		if (chunks[i].length === sz && sumOfCubedChunks[i] % 2 !== 0) {
			chunks[i] = chunks[i].slice(1, chunks[i].length) + chunks[i][0];
			modifiedChunks.push(chunks[i]);
		} else if (chunks[i].length === sz) {
			chunks[i] = chunks[i].split('').reverse().join('');
			modifiedChunks.push(chunks[i]);
		}
	}
	return modifiedChunks.join('');
}
console.log(revrot('123456987654', 6)); // "234561876549"
console.log(revrot('664438769', 8)); // "67834466"
console.log(revrot('123456779', 8));
