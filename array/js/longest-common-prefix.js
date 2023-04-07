/** https://leetcode.com/problems/longest-common-prefix/

Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".


Test Case 1
Input: strs = ["flower","flow","flight"]
Output: "fl"

Test Case 2
Input: strs = ["dog", "racecar", "car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

*/

// Solution 1

/**
 * @param {string[]} strs 
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    let res = "";
    let checks = 0;
    const min = Math.min(...strs.map(o => o.length));
    while (checks < min) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0].charAt(checks) !== strs[j].charAt(checks)) return res;
        }
        res += strs[0].charAt(checks);
        checks++;
    }
    return res;
};


const strs1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs1)); // "fl"

const strs2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs2)); // ""

const strs3 = ["card", "care", "car"];
console.log(longestCommonPrefix(strs3)); // ""

const longestCommonPrefix2 = (strs) => {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
}

const strs4 = ["hubspot", "hubli", "huricane"];
console.log(longestCommonPrefix2(strs4)); // hu

