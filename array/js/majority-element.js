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

// Solution 2

var majorityElement2 = function (nums) {
    let count = 0;
    let obj = {};
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (obj[nums[i]] === undefined) {
            obj[nums[i]] = 1;
        } else {
            obj[nums[i]]++;
        }
        if (obj[nums[i]] > n / 2) {
            return nums[i];
        }
    }
};

console.log(majorityElement2([2, 2, 1, 1, 1, 2, 2])) // 2

// Solution 3

var majorityElement3 = function (nums) {
    let selectedNum = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (count == 0) selectedNum = nums[i]
        if (selectedNum == nums[i]) {
            count++
        } else {
            count--;
        }
    }
    return selectedNum;
};

console.log(majorityElement3([2, 2, 1, 1, 1, 2, 2])) // 2