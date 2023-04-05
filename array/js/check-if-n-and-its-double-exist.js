/** https://leetcode.com/problems/check-if-n-and-its-double-exist/

Check If N and Its Double Exist
Given an array arr of integers, check if there exist two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]

Test Case 1
Input: arr = [10,2,5,3]
Output: true
Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]

Test Case 2
Input: arr = [3,1,7,11]
Output: false
Explanation: There is no i and j that satisfy the conditions.

Constraints:

2 <= arr.length <= 500
-103 <= arr[i] <= 103
 */

// Solution 1
const checkIfExist = (arr, map = new Map()) => {

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) return true
        else {
            map.set(arr[i] * 2, arr[i])
            map.set(arr[i] / 2, arr[i])
        }
    }
    return false;
};

console.log(checkIfExist([10, 2, 5, 3])); // true