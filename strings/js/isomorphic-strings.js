/** https://leetcode.com/problems/isomorphic-strings/

Isomorphic Strings

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters.
No two characters may map to the same character, but a character may map to itself.

Test Case 1
Input: s = "egg", t = "add"
Output: true

Test Case 2
Input: s = "foo", t = "bar"
Output: false

Test Case 3
Input: s = "paper", t = "title"
Output: true

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.

 */

// Solution 1

const isIsomorphic = (s, t, mapS = {}, mapT = {}) => {
    for (let i = 0; i < s.length; i++) {
        if (!mapS[s[i]] && !mapT[t[i]]) {
            mapS[s[i]] = t[i];
            mapT[t[i]] = s[i];
        } else if (mapS[s[i]] !== t[i] || mapT[t[i]] !== s[i]) return false;
    }
    return true;
};

console.log(isIsomorphic("egg", "add")) // true