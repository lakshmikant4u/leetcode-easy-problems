// https://leetcode.com/problems/median-of-two-sorted-arrays/

// Solution 1

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
    let i = 0;
    let j = 0;
    const arr = [];
    while (i < nums1.length || j < nums2.length) {
        if (nums1[i] < nums2[j] || nums2[j] === undefined) {
            arr.push(nums1[i]);
            i++;
        } else {
            arr.push(nums2[j]);
            j++;
        }
    }
    let median;
    if (arr.length % 2 === 0) {
        median = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
    } else {
        median = arr[Math.floor(arr.length / 2)];
    }
    return median;
};