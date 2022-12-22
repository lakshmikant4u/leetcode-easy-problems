/** https://leetcode.com/problems/search-insert-position/

Search Insert Position

Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Test Case 1
Input: nums = [1,3,5,6], target = 5
Output: 2

Test Case 2
Input: nums = [1,3,5,6], target = 2
Output: 1

Test Case 3
Input: nums = [1,3,5,6], target = 7
Output: 4

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104

 */

// Solution 1
/**
 * 
 * @param {*} nums 
 * @param {*} target 
 * @param {*} left 
 * @param {*} right 
 * @returns 
 */
const searchInsert = (nums, target, left = 0, right = nums.length - 1) => {
    if (left > right) return left;
    let mid = parseInt((left + right) / 2);
    if (nums[mid] == target) return mid;
    if (nums[mid] < target) return searchInsert(nums, target, mid + 1, right);
    else return searchInsert(nums, target, left, mid - 1);
};

console.log(searchInsert([1, 3, 5, 6], 5)) // 2
