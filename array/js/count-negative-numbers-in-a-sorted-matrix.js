/** https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

Count Negative Numbers in a Sorted Matrix

Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, 
return the number of negative numbers in grid.
 
Test Case 1
Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.

Test Case 2
Input: grid = [[3,2],[1,0]]
Output: 0

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 100
-100 <= grid[i][j] <= 100

 */

// Solution 1 brute force
let countNegatives = function (grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] < 0) {
                count++;
            }
        }
    }
    return count;
};

console.log(countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]])) // 8

// Solution 2 reduce and filter
const countNegatives2 = grid => grid.reduce((acc, curr) => acc + curr.filter(n => n < 0).length, 0);

console.log(countNegatives2([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]])) // 8

// Solution 3 for of used
var countNegatives3 = function (grid) {
    let countNegativeNums = 0;

    for (const chunk of grid) {
        for (const digit of chunk) {
            if (digit < 0) countNegativeNums++;
        }
    }

    return countNegativeNums;
};

console.log(countNegatives3([[3, 2], [1, 0]])) // 0


