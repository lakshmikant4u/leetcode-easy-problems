""" 
https: // leetcode.com/problems/longest-common-prefix/

Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".


Test Case 1
Input: strs = ["flower", "flow", "flight"]
Output: "fl"

Test Case 2
Input: strs = ["dog", "racecar", "car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

"""

# Solution 1


def longestCommonPrefix(strs):
    if not strs:
        return ''
    prefix = strs[0]
    for i in range(len(prefix)):
        for j in range(1, len(strs)):
            if i >= len(strs[j]):
                return prefix[:i]
            if strs[j][i] != prefix[i]:
                return prefix[:i]

    return prefix


print(longestCommonPrefix(["flower", "flow", "flight"]))  # "fl"
arr = ["dog", "racecar", "car"]
print(longestCommonPrefix(arr))  # ""
