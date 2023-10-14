// World Bits War
// Variation of this nice kata, the war has expanded and become dirtier and meaner; both even and odd numbers will fight with their pointy 1s. And negative integers are coming into play as well, with, ça va sans dire, a negative contribution (think of them as spies or saboteurs).

// A number's strength is determined by the number of set bits (1s) in its binary representation. Negative integers work against their own side so their strength is negative. For example -5 = -101 has strength -2 and +5 = +101 has strength +2.

// The side with the largest cumulated strength wins.

// Again, three possible outcomes: odds win, evens win and tie.

// Examples:

// bitsWar([1,5,12]) => "odds win" //1+101 vs 1100, 3 vs 2
// bitsWar([7,-3,20]) => "evens win" //111-11 vs 10100, 3-2 vs 2
// bitsWar([7,-3,-2,6]) => "tie" //111-11 vs -1+110, 3-2 vs -1+2
function bitsWar(numbers) {
  if (!numbers.length) return "tie";
  const odd = numbers
    .filter((e) => e % 2 !== 0)
    .map((x) => Number(x).toString(2))
    .map((y) =>
      y
        .split("")
        .filter((c) => c === "1" || c === "-")
        .join("")
    )
    .map((n) => (n.includes("-") ? 1 - n.length : n.length))
    .reduce((a, b) => a + b, 0);
  const even = numbers
    .filter((e) => e % 2 === 0)
    .map((x) => Number(x).toString(2))
    .map((y) =>
      y
        .split("")
        .filter((c) => c === "1" || c === "-")
        .join("")
    )
    .map((n) => (n.includes("-") ? 1 - n.length : n.length))
    .reduce((a, b) => a + b, 0);

  return odd === even ? "tie" : odd > even ? "odds win" : "evens win";
  // Clever
  //   let r = numbers.reduce((a, v) => {
  //     return (
  //       (a +=
  //         Math.sign(v) *
  //         (v.toString(2).split("1").length - 1) *
  //         (v % 2 ? 1 : -1)),
  //       a
  //     );
  //   }, 0);
  //   return r > 0 ? "odds win" : r < 0 ? "evens win" : "tie";
}
console.log(bitsWar([1, 5, 12]));
console.log(bitsWar([7, -3, 20]));
console.log(bitsWar([7, -3, -2, 6]));
console.log(bitsWar([]));
