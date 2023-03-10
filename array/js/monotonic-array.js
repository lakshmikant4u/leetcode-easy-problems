/** https://leetcode.com/problems/monotonic-array/

Monotonic Array

An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. 
An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

Test Case 1
Input: nums = [1,2,2,3]
Output: true

Test Case 2
Input: nums = [6,5,4,4]
Output: true

Test Case 3
Input: nums = [1,3,2]
Output: false
 */

// Solution 1
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = (nums) => {
    let increasing = true;
    let decreasing = true;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1])
            increasing = false;
        if (nums[i] < nums[i + 1])
            decreasing = false;
    }
    return increasing || decreasing;
};

console.log(isMonotonic([1, 2, 2, 3])); // true 