/** https://leetcode.com/problems/climbing-stairs/

Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Test Case 1
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Test Case 2
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Constraints:

1 <= n <= 45

 */

// Solution 1 Dynamic Programming

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n, dp = []) => {
    if (dp[n] !== undefined) return dp[n];
    if (n == 1) return 1;
    if (n == 2) return 2;
    return dp[n] = climbStairs(n - 1, dp) + climbStairs(n - 2, dp);
};
