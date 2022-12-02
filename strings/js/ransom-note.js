/** https://leetcode.com/problems/ransom-note

Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters
from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Test Case 1
Input: ransomNote = "a", magazine = "b"
Output: false

Test Case 2
Input: ransomNote = "aa", magazine = "ab"
Output: false

Test Case 3
Input: ransomNote = "aa", magazine = "aab"
Output: true

*/

// Solution 1
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct1 = (ransomNote, magazine) => {
    const letters = {}

    for (let char of magazine) {
        letters[char] = 1 + (letters[char] || 0)
    }

    for (let char of ransomNote) {
        if (letters[char] >= 1) {
            letters[char] = letters[char] - 1
        } else return false
    }

    return true
};

console.log(canConstruct1('a', 'b')); // false
// Solution 2
const canConstruct2 = (ransomNote, magazine) => {

    let freq = new Array(26).fill(0)

    for (let i = 0; i < magazine.length; i++) {
        freq[magazine.charCodeAt(i) - 97]++
    }
    for (let j = 0; j < ransomNote.length; j++) {
        freq[ransomNote.charCodeAt(j) - 97]--

    }

    for (let k = 0; k < freq.length; k++) {
        if (freq[k] < 0) {
            return false
        }
    }
    return true

};

console.log(canConstruct2('aa', 'ba')); // false

// Solution 3 Slight variation
const canConstruct3 = (ransomNote, magazine) => {
    const wordsCount = Array(26).fill(0);
    for (let i = 0; i < magazine.length; i++) {
        wordsCount[magazine.charCodeAt(i) - 97] += 1
    }

    for (let i = 0; i < ransomNote.length; i++) {
        const ascii = ransomNote.charCodeAt(i);
        if (wordsCount[ascii - 97] === 0) return false;
        wordsCount[ascii - 97] -= 1;
    }

    return true;
};

console.log(canConstruct3('aa', 'baa')); // true