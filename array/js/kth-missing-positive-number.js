/** https://leetcode.com/problems/kth-missing-positive-number/

Kth Missing Positive Number

Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Return the kth positive integer that is missing from this array.

Test Case 1
Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. 
The 5th missing positive integer is 9.

Test Case 2
Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.
 

Constraints:

1 <= arr.length <= 1000
1 <= arr[i] <= 1000
1 <= k <= 1000
arr[i] < arr[j] for 1 <= i < j <= arr.length

 */

// Solution 1
/**
 * 
 * @param {*} arr 
 * @param {*} k 
 * @param {*} prev 
 * @returns 
 */
const findKthPositive = (arr, k, prev = 0) => {

    for (let i = 0; i < arr.length; i++) {
        const diff = arr[i] - prev - 1;
        if (k > diff) k -= diff;
        else return prev + k;
        prev = arr[i];
    }
    return prev + k
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5)); // 9
// Solution 2

var findKthPositive2 = function (arr, k) {
    const missing = [];
    let j = 1;
    let i = 0;

    while ((missing.length - 1) !== k) {
        if (arr[i] !== j) {
            missing.push(j);
        } else {
            i++;
        }
        j++;
    }

    return missing[k - 1];
};


console.log(findKthPositive2([1, 2, 3, 4], 2)); // 6