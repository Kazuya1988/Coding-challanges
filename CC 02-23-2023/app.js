// Multiplication table
// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]
function multiplicationTable(size) {
	let numbers = [...Array(size * size).keys()].map((i) => i + 1);
	let table = [];
	let newTable = [];
	for (let i = 0; i < numbers.length; i++) {}
	return numbers;
}
console.log(multiplicationTable(3));
