// Smart Sum
// Your task is to write a function, smartSum, that returns the sum of an arbitrary number of arguments. But be careful, some of your arguments can be arrays of numbers or nested arrays.

// smartSum(1,2,3,[4,5],6); // returns 21
// smartSum(1,2,[[3,4],5],6); // returns 21
function smartSum() {
  let numbers = [...arguments];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (!Array.isArray(numbers[i])) {
      sum += numbers[i];
    } else {
      sum += smartSum(...numbers[i]);
    }
  }
  return sum;
}
// Using reduce method
// const smartSum = (...a) => a.reduce((s, e) => s + (typeof e === "number" ? e : smartSum(...e)), 0);
console.log(smartSum(1, 2, 3, [4, 5], 6));
console.log(smartSum(1, 2, [[3, 4], 5], 6));
