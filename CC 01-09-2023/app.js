// Unlucky Days
// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year in Gregorian calendar as integer.

// Output: Number of Black Fridays in the year as an integer.

// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1
function unluckyDays(year) {
	let date = new Date();
	let dayOfWeek = 5;
	let dayOfMonth = 13;
	let count = 0;
	date.setFullYear(year);
	date.setMonth(0);
	date.setDate(dayOfMonth);
	for (let i = 0; i < 12; i++) {
		if (date.getDay() === dayOfWeek && date.getDate() === dayOfMonth) {
			count++;
		}
		date.setMonth(i + 1);
	}
	return count;
}
console.log(unluckyDays(1001));
