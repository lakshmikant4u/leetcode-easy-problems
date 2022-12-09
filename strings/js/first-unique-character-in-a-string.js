/** https://leetcode.com/problems/first-unique-character-in-a-string/

First Unique Character in a String

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Test Case 1
Input: s = "leetcode"
Output: 0

Test Case 2
Input: s = "loveleetcode"
Output: 2

Test Case 3
Input: s = "aabb"
Output: -1

Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.

 */

// Solution 1
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = str => {
    let freq = Array(26).fill(0);
    for (var s of str) {
        const idx = s.charCodeAt() - 97;
        freq[idx] += 1;
    }
    for (let i = 0; i < str.length; i++) {
        const idx = str[i].charCodeAt() - 97;
        if (freq[idx] === 1) return i;
    }
    return -1;
}

console.log(firstUniqChar(leetcode)); // 0

// Solution 2 
const firstUniqChar2 = str => {
    for (let i = 0; i < str.length; i++) {
        let a = s[i]
        if (s.indexOf(a) === i && s.indexOf(a, i + 1) === -1) {
            return i
        }
    }
    return -1
};