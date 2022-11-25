/** https://leetcode.com/problems/n-th-tribonacci-number/

N-th Tribonacci Number

The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.


Test Case 1
Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4

Test Case 2
Input: n = 25
Output: 1389537

Constraints:

0 <= n <= 37
The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.

*/


// Solution 1 - Dynamic Programming

/**
 * @param {number} n 
 * @param {array} dp
 * @return {number}
 */
const tribonacci_dp = (n, dp = []) => {
    if (dp[n]) return dp[n];
    if (n == 0) return 0;
    if (n == 1 || n == 2) return 1;
    return dp[n] = tribonacci_dp(n - 1, dp) + tribonacci_dp(n - 2, dp) + tribonacci_dp(n - 3, dp);
}

const n1 = 4;
console.log(tribonacci_dp(n1)); // 4

const n2 = 25;
console.log(tribonacci_dp(n2)); // 1389537

// Solution 1 - Dynamic Programming

/**
 * @param {number} n
 * @return {number}
 */
const tribonacci_recusrion = (n) => {
    if (n == 0) return 0;
    if (n == 1 || n == 2) return 1;
    return tribonacci_recusrion(n - 1) + tribonacci_recusrion(n - 2) + tribonacci_recusrion(n - 3);
}

const n3 = 4;
console.log(tribonacci_recusrion(n1)); // 4

const n4 = 25;
console.log(tribonacci_recusrion(n2)); // 1389537