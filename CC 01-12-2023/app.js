// Alphabet war
// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!
function alphabetWar(fight) {
	let leftSideSum = 0;
	let rightSideSum = 0;
	for (let i = 0; i < fight.length; i++) {
		switch (fight[i]) {
			case 'w':
				leftSideSum += 4;
				break;
			case 'p':
				leftSideSum += 3;
				break;
			case 'b':
				leftSideSum += 2;
				break;
			case 's':
				leftSideSum += 1;
				break;
			case 'm':
				rightSideSum += 4;
				break;
			case 'q':
				rightSideSum += 3;
				break;
			case 'd':
				rightSideSum += 2;
				break;
			case 'z':
				rightSideSum += 1;
				break;
		}
	}
	return leftSideSum > rightSideSum
		? 'Left size wins!'
		: leftSideSum === rightSideSum
		? "Let's fight again!"
		: 'Right side wins!';
	// Clever Solution
	// let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
	// let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
	// return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}
console.log(alphabetWar('zdqmwpbs'));

// Over The Road
// Task
// You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. The street looks something like this:

// Street
// 1|   |6
// 3|   |4
// 5|   |2
//   you
// Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.

// Example (address, n --> output)
// Given your house number address and length of street n, give the house number on the opposite side of the street.

// 1, 3 --> 6
// 3, 3 --> 4
// 2, 3 --> 5
// 3, 5 --> 8
// Note about errors
// If you are timing out, running out of memory, or get any kind of "error", read on. Both n and address could get upto 500 billion with over 200 random tests. If you try to store the addresses of 500 billion houses in a list then you will run out of memory and the tests will crash. This is not a kata problem so please don't post an issue. Similarly if the tests don't complete within 12 seconds then you also fail.

// To solve this, you need to think of a way to do the kata without making massive lists or huge for loops. Read the discourse for some inspiration :)

function overTheRoad(address, n) {
	return n * 2 + 1 - address;
}
console.log(overTheRoad(1, 3));
