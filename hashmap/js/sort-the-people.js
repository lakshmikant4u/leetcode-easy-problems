/** https://leetcode.com/problems/sort-the-people/

Sort the People

You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.
For each index i, names[i] and heights[i] denote the name and height of the ith person.
Return names sorted in descending order by the people's heights.

Test Case 1
Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John.

Test Case 2
Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
Output: ["Bob","Alice","Bob"]
Explanation: The first Bob is the tallest, followed by Alice and the second Bob.

Constraints:

n == names.length == heights.length
1 <= n <= 103
1 <= names[i].length <= 20
1 <= heights[i] <= 105
names[i] consists of lower and upper case English letters.
All the values of heights are distinct.


 */

// Solution 1 using Map

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
const sortPeople = (names, heights, map = new Map()) => {
    heights.forEach((value, index) => map.set(value, names[index]));
    heights.sort((a, b) => b - a)
    return heights.map(value => map.get(value));
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170])); // ["Mary","Emma","John"]