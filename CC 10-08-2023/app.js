// LinkedList ->
// Linked lists are data structures composed of nested or chained objects, each containing a single value and a reference to the next object.

// Here's an example of a list:

// {value: 1, next: {value: 2, next: {value: 3, next: null}}}
// Write a function listToArray (or list_to_array in Python) that converts a list to an array, like this:

// [1, 2, 3]
// Assume all inputs are v
const data = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
function listToArray(list) {
  //  const {value, next} = list;
  //  let values = typeof value !== 'object'? [value] : [];
  //  if(typeof next === 'object' && next !== null){
  //     values = values.concat(listToArray(next))
  // }
  //  return values;
  if (list === null) return [];
  return [list.value, ...listToArray(list.next)];
}
console.log(listToArray(data)); // Should be [1,2,3]
