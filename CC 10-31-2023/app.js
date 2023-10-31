// flatten()
// For this exercise you will create a global flatten method. The method takes in any number of arguments and flattens them into a single array. If any of the arguments passed in are an array then the individual objects within the array will be flattened so that they exist at the same level as the other arguments. Any nested arrays, no matter how deep, should be flattened into the single array result.

// The following are examples of how this function would be used and what the expected results would be:

// flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
// flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']
function flatten() {
  let arr = [...arguments];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(...arr[i].map((e) => flatten(e)));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
  // Clever
  // return [...arguments].reduce((result,curr) => Array.isArray(curr) ? result.concat(flatten(...curr)) : resul
}
console.log(flatten(1, [2, 3], 4, 5, [6, [7]]));
console.log(flatten("a", ["b", 2], 3, null, [[4], ["c"]]));
