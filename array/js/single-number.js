/** https://leetcode.com/problems/single-number/
 
Single Number

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Test Case 1
Input: nums = [2,2,1]
Output: 1

Test case 2
Input: nums = [4,1,2,1,2]
Output: 4

Test Case 3
Input: nums = [1]
Output: 1

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.

 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution 1 using normal for loop to sort and compare consecutive pairs
const singleNumber = (nums) => {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 1; i += 2) {
        if (nums[i] != nums[i + 1]) return nums[i]
    }
    return nums[nums.length - 1];
};

console.log(singleNumber([2, 2, 1])); // 1

// Solution 2 use Array reduce  and XOR to get the odd one out
const singleNumber2 = (nums) => nums.reduce((prev, curr) => prev ^ curr);

console.log(singleNumber2([2, 2, 1, 3, 1])); // 3

