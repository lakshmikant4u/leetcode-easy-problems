/** https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/

Count Odd Numbers in an Interval Range

Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

Test Case 1
Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].

Test Case 2
Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].

Constraints:

0 <= low <= high <= 10^9
 */

// Solution 1 Using Bitwise NOT(~) And Right shift (>>) operators

const countOdds1 = (low, high) => (high - (low & ~1) + 1) >> 1;

console.log(countOdds1(2, 9)); // 4

// Solution 2 
const countOdds2 = (low, high) => Math.floor((high + 1) / 2) - low / 2;
console.log(countOdds2(4, 8)); // 2

// Solution 3
const countOdds3 = (low, high) => {
    if (low % 2 === 1) {
        low--;
    }
    if (high % 2 === 1) {
        high++;
    }
    return (high - low) / 2;
};
console.log(countOdds3(2, 7)); // 3

