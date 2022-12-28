/** https://leetcode.com/problems/palindrome-number/

Palindrome Number

Given an integer x, return true if x is a palindrome, and false otherwise.

Test Case 1
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Test Case 2
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Test Case 3
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

 */


// Solution 1
/**
 * 
 * @param {*} x 
 * @returns 
 */
const isPalindrome = function (x) {
    if (x < 0) return false;
    let reverse = 0;
    let temp = x;
    while (temp != 0) {
        reverse = reverse * 10 + temp % 10;
        temp = parseInt(temp / 10);
    }
    return x === reverse;
};

console.log(isPalindrome(121)); // true

// Solution 2

const isPalindrome2 = x => {
    const str = `${x}`
    const reverseStr = str.split('').reverse().join("")
    return str === reverseStr;
};
console.log(isPalindrome2(-121)); //false

