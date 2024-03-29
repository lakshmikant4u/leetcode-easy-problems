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

// Solution 1 : Using Map
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

// Solution 2 : Using Set
const checkIfExist2 = (arr, set = new Set()) => {

    for (const num of arr) {
        // If this number's double has been seen
        if (set.has(num * 2)) return true;
        // If this is some number's double
        if (set.has(num / 2)) return true;
        set.add(num);
    }
    return false;
};

console.log(checkIfExist2([3, 1, 7, 11])); // false

// Solution 3 : Brute force - two loops n2

const checkIfExist3 = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if ((i != j) && ((2 * arr[i]) == arr[j])) {
                return true;
            }
        }
    }
    return false;
};
console.log(checkIfExist3([3, 1, 7, 14, 11])); // true

