/**  https://leetcode.com/problems/two-sum/

Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Test Case 1
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Test Case 2
Input: nums = [3,2,4], target = 6
Output: [1,2]

Test Case 3
Input: nums = [3,3], target = 6
Output: [0,1]
*/

// Solution 1 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    let i = 0; let j = nums.length - 1;
    let originalNums = [...nums];
    nums.sort((a, b) => a - b);
    while (i < j) {
        let sum = nums[i] + nums[j];
        if (sum == target) {
            if (nums[i] == nums[j]) {
                return [originalNums.indexOf(nums[i]), originalNums.indexOf(nums[j], i + 1)]
            }
            return [originalNums.indexOf(nums[i]), originalNums.indexOf(nums[j])];
        }
        if (sum > target) j--;
        if (sum < target) i++;
    }
    return [0, 1];
};