// No Loops 2 - You only need one
// *** No Loops Allowed ***

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.
function check(a, x) {
	return a.includes(x);
}
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45));
