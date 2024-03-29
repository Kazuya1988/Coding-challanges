// The Supermarket Queue
// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.
// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12
// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
// N.B. You should assume that all the test input will be valid, as specified above.

// P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool
function queueTime(customers, n) {
	// Make an array containing n amount of elements,
	// n representing the number of tills,
	// and fill with zeroes
	let tills = new Array(n).fill(0);
	// Iterate through the customers
	for (let time of customers) {
		// Find the till that has the least time
		let idx = tills.indexOf(Math.min(...tills));
		// Add the time, representing the customer to
		// the till that has the least time
		tills[idx] += time;
	}

	// Return the till that has the longest wait time
	// This is the required time to get all customers
	// through the que.
	return Math.max(...tills);
}
// console.log(queueTime([2, 3, 10, 2], 2));
// console.log(queueTime([10, 2, 3, 3], 2));

// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]
function towerBuilder(nFloors) {
	let towerBase = new Array(nFloors + nFloors - 1).fill('*');
	let tower = [];
	for (let i = 0; i < nFloors; i++) {
		let floor = [];
		floor.push(towerBase.slice(i + i, towerBase.length).join(''));
		floor.unshift(' '.repeat(i));
		floor.push(' '.repeat(i));
		tower.push(floor.flat().join(''));
	}
	return tower.reverse();
	//     let tower = [];
	//   for (var i = 0; i < nFloors; i++) {
	//     tower.push(" ".repeat(nFloors - i - 1)
	//              + "*".repeat((i * 2)+ 1)
	//              + " ".repeat(nFloors - i - 1));
	//   }
	//   return tower;
}
console.log(towerBuilder(3)); // ["  *  "," *** ","*****"]
console.log(towerBuilder(6)); // ["  *  "," *** ","*****"]
