/** https://leetcode.com/problems/single-number/
 
Single Number

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Test Case 1
Input: nums = [2,2,1]
Output: 1

Test case 2
Input: nums = [4,1,2,1,2]
Output: 4

Test Case 3
Input: nums = [1]
Output: 1

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.

 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution 1 using normal for loop to sort and compare consecutive pairs
const singleNumber = (nums) => {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 1; i += 2) {
        if (nums[i] != nums[i + 1]) return nums[i]
    }
    return nums[nums.length - 1];
};

console.log(singleNumber([2, 2, 1])); // 1

// Solution 2 use Array reduce  and XOR to get the odd one out
const singleNumber2 = (nums) => nums.reduce((prev, curr) => prev ^ curr);

console.log(singleNumber2([2, 2, 1, 3, 1])); // 3

// Solution 3 use object and keys to get the result
const singleNumber3 = (nums) => {
    const digitCount = {};
    for (let i = 0; i < nums.length; i++) {
        if (digitCount[nums[i]]) digitCount[nums[i]]++;
        else digitCount[nums[i]] = 1;
    }
    return Object.keys(digitCount).find(x => digitCount[x] === 1);
}

console.log(singleNumber3([2, 1, 1])); // 2

// Solution 4 use for loop similar to Array reduce and XOR to get the odd one out
const singleNumber4 = (nums) => {
    let ans;
    for (let i = 0; i < nums.length; i++) {
        ans = ans ^ nums[i];
    }
    return ans;
}

console.log(singleNumber4(([4, 1, 2, 1, 2]))); // 4

// Solution 5 use forEach loop similar to Array reduce and XOR to get the odd one out
const singleNumber5 = (nums) => {
    let ans = 0;
    nums.forEach(x => { ans ^= x; })
    return ans;
}

console.log(singleNumber5(([2, 1, 3, 1, 2]))); // 3

// Solution 6 to use Map to get the number
const singleNumber6 = function (nums) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) map.delete(nums[i])
        else map.set(nums[i], true)
    }
    return map.keys().next().value
};

console.log(singleNumber6(([2]))); // 2

// Solution 7 to use Map with slight variation to get the number
const singleNumber7 = (nums) => {
    const map = new Map()
    for (let num of nums) {
        map.set(num, map.get(num) + 1 || 1)
    }
    for (let [key, val] of map) {
        if (val === 1) return key
    }
};
console.log(singleNumber7(([2, 2, 5]))); // 5