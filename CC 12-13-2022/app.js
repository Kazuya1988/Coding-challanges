// Sum of angles
// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
// Example:
// angel(3) ---> 180
// angel(4) ---> 360
function angel(n) {
	let sumAngels = 0;
	for (let i = 3; i <= n; i++) {
		sumAngels += 180;
	}
	return sumAngels;
	// Clever Solution:
	// return (n-2) * 180;
}
console.log(angel(4));
