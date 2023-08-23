// Computer problem series #1: Fill the Hard Disk Drive
// Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.

// Input:
// Array of file sizes (0 <= s <= 100)
// Capacity of the HD (0 <= c <= 500)
// Output:
// Number of files that can be fully saved in the HD.
// Examples:
// save([4,4,4,3,3], 12) -> 3
// # 4+4+4 <= 12, but 4+4+4+3 > 12
// save([4,4,4,3,3], 11) -> 2
// # 4+4 <= 11, but 4+4+4 > 11
// Do not expect any negative or invalid inputs.
function save(sizes, hd) {
	const numbers = sizes.reduce((sum, curr) => {
		if (sum.reduce((a, b) => a + b, 0) < hd) {
			sum.push(curr);
		}
		return sum;
	}, []);
	return numbers.reduce((a, b) => a + b, 0) <= hd
		? numbers.length
		: numbers.slice(0, numbers.length - 1).length;
	// let total = 0
	// let count = 0
	// for (let file of sizes) {
	//   if ((total + file) <= hd) {
	//     total += file
	//     count++
	//   } else {
	//     return count
	//   }
	// }
	// return count
}
console.log(save([4, 4, 4, 3, 3], 12)); // 3
console.log(save([4, 4, 4, 3, 3], 11)); // 2
