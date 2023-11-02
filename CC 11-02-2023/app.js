// Don't Drink the Water
// Don't Drink the Water

// Given a two-dimensional array representation of a glass of mixed liquids, sort the array such that the liquids appear in the glass based on their density. (Lower density floats to the top) The width of the glass will not change from top to bottom.

// ======================
// |   Density Chart    |
// ======================
// | Honey   | H | 1.36 |
// | Water   | W | 1.00 |
// | Alcohol | A | 0.87 |
// | Oil     | O | 0.80 |
// ----------------------

// {                             {
//   { 'H', 'H', 'W', 'O' },        { 'O','O','O','O' },
//   { 'W', 'W', 'O', 'W' },  =>    { 'W','W','W','W' },
//   { 'H', 'H', 'O', 'O' }         { 'H','H','H','H' }
// }                             }

// The glass representation may be larger or smaller. If a liquid doesn't fill a row, it floats to the top and to the left.
function separateLiquids(glass) {
  const density = {
    H: 1.36,
    W: 1.0,
    A: 0.87,
    O: 0.8,
  };
  const sorted = [].concat(...glass).sort((a, b) => density[a] - density[b]);
  console.log(sorted.length);
  const densitySorted = [];
  for (let i = 0; i < sorted.length; i += glass[0].length) {
    densitySorted.push(sorted.slice(i, i + glass[0].length));
  }
  return densitySorted;
}
console.log(
  separateLiquids([
    ["H", "H", "W", "O"],
    ["W", "W", "O", "W"],
    ["H", "H", "O", "O"],
  ])
);
