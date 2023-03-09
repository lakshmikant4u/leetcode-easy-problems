/** https://leetcode.com/problems/repeated-substring-pattern/

Repeated Substring Pattern

Given a string s, check if it can be constructed by taking a substring of it and
appending multiple copies of the substring together.

Test Case 1
Input: s = "abab"
Output: true
Explanation: It is the substring "ab" twice.

Test Case 2
Input: s = "aba"
Output: false

Test Case 3
Input: s = "abcabcabcabc"
Output: true
Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

Constraints:

1 <= s.length <= 104
s consists of lowercase English letters.

*/

// Solution 1
/**
 * 
 * @param {*} s 
 * @param {*} len 
 * @returns 
 */
const repeatedSubstringPattern = (s, len = s.length) => {

    let currStr;
    for (let i = 1; i <= len / 2; i++) {
        currStr = s.substring(0, i)
        if (len % i === 0) {
            currStr = currStr.repeat(len / i)
            if (currStr === s) return true
        }
    }
    return false
};

console.log(repeatedSubstringPattern("abab")); // true
