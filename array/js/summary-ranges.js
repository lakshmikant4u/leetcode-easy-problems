/** https://leetcode.com/problems/summary-ranges/

Summary Ranges

You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly.
That is, each element of nums is covered by exactly one of the ranges,
and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b

Test Case 1
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"

Test Case 2
Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"

Constraints:

0 <= nums.length <= 20
-231 <= nums[i] <= 231 - 1
All the values of nums are unique.
nums is sorted in ascending order.

*/

// Solution 1
/**
 * 
 * @param {*} nums 
 * @param {*} index 
 * @param {*} ranges 
 * @returns 
 */
const summaryRanges = (nums, index = 0, ranges = []) => {
    for (let num = 0; num < nums.length; num++) {
        if (num + 1 < nums.length && nums[num] + 1 == nums[num + 1])
            continue
        else if (index == num)
            ranges.push(`${nums[index]}`)
        else
            ranges.push(`${nums[index]}->${nums[num]}`)
        index = num + 1
    }
    return ranges
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7])); // [ '0->2', '4->5', '7' ]