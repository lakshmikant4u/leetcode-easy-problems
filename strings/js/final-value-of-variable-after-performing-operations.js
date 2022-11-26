/**  https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

Final Value of Variable After Performing Operations

There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

Test Case 1

Input: operations = ["--X","X++","X++"]
Output: 1
Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1.


Test Case 2

Input: operations = ["++X","++X","X++"]
Output: 3
Explanation: The operations are performed as follows:
Initially, X = 0.
++X: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
X++: X is incremented by 1, X = 2 + 1 = 3.

Test Case 3

Input: operations = ["X++","++X","--X","X--"]
Output: 0
Explanation: The operations are performed as follows:
Initially, X = 0.
X++: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
--X: X is decremented by 1, X = 2 - 1 = 1.
X--: X is decremented by 1, X = 1 - 1 = 0.

*/


// Solution 1 with reduce method of Array
/**
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = operations => operations.reduce((prev, cur) => (cur == "++X" || cur == "X++") ? prev + 1 : prev - 1, 0);


console.log(finalValueAfterOperations(["--X", "X++", "X++"])); // 1

console.log(finalValueAfterOperations(["++X", "++X", "X++"])); // 3

console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"])); // 0


// Solution 2 with simple for loop

const finalValueAfterOperations2 = operations => {
    let answer = 0;
    for (const operation of operations)
        answer = operation[1] === "+" ? answer + 1 : answer - 1;
    return answer;
};