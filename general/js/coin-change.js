/* Given an integer array of coins[] of size N representing different types of currency and an integer sum, 
The task is to find the number of ways to make sum by using different combinations from coins[].
Note: Assume that you have an infinite supply of each type of coin. 

Test Case 1
Input: sum = 4, coins[] = { 1, 2, 3},
Output: 4
Explanation: there are four solutions: { 1, 1, 1, 1 }, { 1, 1, 2 }, { 2, 2 }, { 1, 3 }. 

Test Case 2
Input: sum = 10, coins[] = {2, 5, 3, 6}
Output: 5
Explanation: There are five solutions: 
{2,2,2,2,2}, {2,2,3,3}, {2,2,6}, {2,3,5} and {5,5}.

*/

// Solution 1 - Dynamic Programming (Memoization)

const coinChange = (sum, coins, dp = []) => {
    if (dp[sum]) return dp[sum];
    if (sum == 0) return 0;
    let minChange = Infinity;
    for (let i = 0; i < coins.length; i++) {
        if (sum - coins[i] >= 0) {
            dp[sum - coins[i]] = 1 + coinChange(sum - coins[i], coins, dp);
        }
        if (dp[sum - coins[i]] < minChange) {
            minChange = dp[sum - coins[i]];
        }
    }
    return minChange;
}

const sum = 4;
const coins = [1, 2, 3];
console.log(coinChange(sum, coins)); // 4

const sum2 = 10;
const coins2 = [2, 5, 3, 6];
console.log(coinChange(sum2, coins2)); // 5
