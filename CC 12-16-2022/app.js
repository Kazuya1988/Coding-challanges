// Fizz Buzz
// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]
function fizzbuzz(n) {
	let fizzbuzzArray = [];
	for (let i = 1; i <= n; i++) {
		if (i % 15 === 0) fizzbuzzArray.push('FizzBuzz');
		else if (i % 3 === 0) fizzbuzzArray.push('Fizz');
		else if (i % 5 === 0) fizzbuzzArray.push('Buzz');
		else fizzbuzzArray.push(i);
	}
	return fizzbuzzArray;
}
console.log(fizzbuzz(15));

// Check the exam
// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
function checkExam(array1, array2) {
	let result = 0;
	for (let i = 0; i < array1.length; i++) {
		if (array1[i] === array2[i]) {
			result += 4;
		} else if (array1[i] !== array2[i]) {
			if (array2[i] === '') {
				result += 0;
			} else {
				result -= 1;
			}
		}
	}
	return result < 0 ? 0 : result;
}

console.log(checkExam(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c']));
