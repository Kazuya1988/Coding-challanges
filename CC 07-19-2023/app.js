// uniq (UNIX style)
// Implement a function which behaves like the uniq command in UNIX.

// It takes as input a sequence and returns a sequence in which all duplicate elements following each other have been reduced to one instance.

// Example:

// ["a", "a", "b", "b", "c", "a", "b", "c"]  =>  ["a", "b", "c", "a", "b", "c"]
function uniq(a) {
	// for(let i = 0; i < a.length; i++){
	//     if(a[i] === a[i - 1]){
	//         a.splice(i,1)
	//         i--;
	//     }
	// }
	// return a;
	return a.filter((n, index, array) => n !== array[index + 1]);
}
console.log(uniq(['a', 'a', 'b', 'b', 'c', 'a', 'b', 'c']));
