// Which are in?
// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []
function inArray(array1, array2) {
	return array1.filter((e) => array2.find((x) => x.match(e))).sort();
	// return array1.filter( e => array2.join(' ').includes(e) ).sort();
	// return a1.filter( sub => a2.some( whole => whole.includes(sub))).sort();
}
console.log(
	inArray(
		['arp', 'live', 'strong'],
		['lively', 'alive', 'harp', 'sharp', 'armstrong']
	)
);
