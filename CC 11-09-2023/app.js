// Sort arrays - 3
// This time the input is a sequence of course-ids that are formatted in the following way:

// name-yymm
// The return of the function shall first be sorted by yymm, then by the name (which varies in length).
// input: courses - array of course-names "name-yymm"
// output: sorted by "yymm", then "name"
const sortme = function (courses) {
  return courses
    .sort((a, b) => b.slice(0, -5).length - a.slice(0, -5).length)
    .sort((a, b) => a.slice(0, -5).localeCompare(b.slice(0, -5)))
    .sort((a, b) => a.slice(-4) - b.slice(-4));
  // return names.sort((a, b) => {
  //     [nameA, dateA] = a.split('-');
  //     [nameB, dateB] = b.split('-');
  //     return +dateA - +dateB || nameA.localeCompare(nameB);
  //   });
};
console.log(sortme(["web-1305", "site-1305", "web-1304", "site-1304"]));
// Should return ["site-1304", "web-1304", "site-1305", "web-1305"]
console.log(
  sortme([
    "aeb-1305",
    "site-1305",
    "play-1215",
    "web-1304",
    "site-1304",
    "beb-1305",
  ])
);
// Should return ["play-1215", "site-1304", "web-1304", "aeb-1305", "beb-1305", "site-1305"]
