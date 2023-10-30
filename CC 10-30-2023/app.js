// Find the unique string
// There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 2 strings.
function findUniq(arr) {
  let sorted = arr
    .map((e) => e.toLowerCase().split("").sort().join(""))
    .map((x) => [...new Set(x)].join(""));
  let findIndex = sorted.indexOf(
    ...sorted.filter((e) => sorted.lastIndexOf(e) === sorted.indexOf(e))
  );
  return arr[findIndex];
}
console.log(findUniq(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"]));
console.log(findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"]));
