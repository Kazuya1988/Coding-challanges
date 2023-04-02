// Lottery Ticket
// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.
function bingo(ticket, win) {
	let ticketWins = ticket.filter(([c, n]) => {
		for (let i = 0; i < c.length; i++) {
			if (c.charCodeAt(i) === n) return [c, n];
		}
	});
	console.log(ticketWins);
	return ticketWins.length >= win ? 'Winner!' : 'Loser!';
}
console.log(
	bingo(
		[
			['GIXU', 71],
			['BJ', 83],
			['WY', 89],
		],
		2
	)
);
