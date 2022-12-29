/** https://leetcode.com/problems/majority-element/

Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times.
You may assume that the majority element always exists in the array.

Test Case 1
Input: nums = [3,2,3]
Output: 3

Test Case 2
Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

 */

// Solution 1

const majorityElement = (nums) => {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)]
};

console.log(majorityElement([3, 2, 3])) // 3