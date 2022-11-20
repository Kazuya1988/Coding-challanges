// Sum of the first nth term of Series
// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n) {
	let arrSeries = [];
	let counter = 1;
	while (arrSeries.length !== n) {
		arrSeries.push(counter);
		counter += 3;
	}
	console.log(arrSeries);
	let sumArr = arrSeries.reduce((sum, num) => sum + 1 / num);
	return sumArr.toFixed(2);
	// Better and shorter way to do it

	// for (var s = 0, i = 0; i < n; i++) {
	//   s += 1 / (1 + i * 3)
	// }

	// return s.toFixed(2)
}
console.log(SeriesSum(5));
