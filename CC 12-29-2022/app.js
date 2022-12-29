// Functional Addition
// Create a function add(n)/Add(n) which returns a function that always adds n to any number

var addOne = add(1);
console.log(addOne(3)); // 4
// It has to do with the way that functions are called. If you substitue the addOne(3) with the value assigned to it, you get:
// var addOne = add(1);
// addOne(3) equals add(1)(3);
// So the call passes the arguments in the set order.
var addThree = add(3);
console.log(addThree(3)); // 6
function add(n) {
	return function (num) {
		return num + n;
	};
}
