// Cat and Mouse - Harder Version
// You will be given a string (x) featuring a cat 'C', a dog 'D' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump (j) characters.

// Also, the cat cannot jump over the dog.

// So:

// if j = 5:

// ..C.....m. returns 'Caught!' <-- not more than j characters between

// .....C............m...... returns 'Escaped!' <-- as there are more than j characters between the two, the cat can't jump far enough

// if j = 10:

// ...m.........C...D returns 'Caught!' <--Cat can jump far enough and jump is not over dog

// ...m....D....C....... returns 'Protected!' <-- Cat can jump far enough, but dog is in the way, protecting the mouse

// Finally, if all three animals are not present, return 'boring without all three'
function catMouse(x, j) {
	const d = x.indexOf('D');
	const c = x.indexOf('C');
	const m = x.indexOf('m');
	const distance = Math.abs(c - m);
	if (d === -1 || c === -1 || m === -1) return 'boring without all three';
	if (distance <= j && ((d > c && d < m) || (d < c && d > m))) {
		return 'Protected!';
	} else if (distance <= j) {
		return 'Caught!';
	} else {
		return 'Escaped!';
	}
}
console.log(catMouse('..D.....Cm', 13)); // "Caught!"
console.log(catMouse('............C.............D..m...', 8)); // "Escaped!"
console.log(catMouse('m.C...', 5)); // "boring without all three"
console.log(catMouse('...m....D....C.......', 10)); // "Protected"
console.log(catMouse('D..m.......C.', 8)); // "Caught"
console.log(catMouse('.......m............D.....C...', 18)); // "Escaped!"
console.log(catMouse('CmD', 19)); // "Caught!"
