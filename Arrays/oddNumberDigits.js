/* https://binarysearch.com/problems/Odd-Number-of-Digits */
/* 
Given a list of positive integers nums, return the number of integers that have odd number of digits.
Constraints
n ≤ 100,000 where n is the length of nums
Example 1
Input
nums = [1, 800, 2, 10, 3]
Output
4
Explanation
[1, 800, 2, 3] have odd number of digits.
*/

function oddNumberDigits(nums) {
	let counter = 0;
	let lengthOfNum = [];

	for (const num of nums) {
		lengthOfNum.push(num.toString().length);
	}

	return lengthOfNum.filter((num) => num % 2 === 1).length;
}

console.log(oddNumberDigits([1, 800, 2, 10, 3]));
