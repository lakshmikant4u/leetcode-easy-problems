/** https://leetcode.com/problems/number-of-good-pairs/

Number of Good Pairs

Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

Test Case 1
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Test Case 2
Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.

Test Case 3
Input: nums = [1,2,3]
Output: 0

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100

 */

// Solution 1

/**
 * @param {number[]} nums
 * @param {Map} map
 * @return {number}
 */
const numIdenticalPairs = (nums, map = new Map(), res = 0) => {
    for (let i = 0; i < nums.length; i++) {
        let temp = map.get(nums[i]);
        if (temp) res += temp;
        /** Everytime same value is found in other index it can be paired with 
         * existing one so adding previous value to result 
         */
        map.set(nums[i], temp ? temp + 1 : 1);
    }
    return res;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])) // 4

// Solution 2 using Array reduce method

const numIdenticalPairs2 = (nums, map = new Map()) => nums.reduce((prev, cur) => {
    if (map.get(cur)) {
        prev += map.get(cur);
        map.set(cur, map.get(cur) + 1)
    } else {
        map.set(cur, 1)
    }
    return prev;
}, 0);

console.log(numIdenticalPairs2([1, 2, 3])); // 0