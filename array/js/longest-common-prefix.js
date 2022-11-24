// https://leetcode.com/problems/longest-common-prefix/

// Test Case 1
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Test Case 2
// Input: strs = ["dog", "racecar", "car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

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

