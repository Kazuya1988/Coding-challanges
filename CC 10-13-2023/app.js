// Array Exchange
// Array Exchange and Reversing

// It's time for some array exchange! The objective is simple: exchange the elements of two arrays in-place in a way that their new content is also reversed.

// // before
const myArray = ["a", "b", "c"];
const otherArray = [1, 2, 3];

// exchangeWith(myArray, otherArray);

// // after
// myArray => [3, 2, 1]
// otherArray => ['c', 'b', 'a']
function exchangeWith(a, b) {
  const bCopy = b.slice();
  const aCopy = a.slice();
  a.splice(0, a.length, ...bCopy.reverse());
  b.splice(0, b.length, ...aCopy.reverse());
}
exchangeWith(myArray, otherArray);

console.log(myArray);
console.log(otherArray);
