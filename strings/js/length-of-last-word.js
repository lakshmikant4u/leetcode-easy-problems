/** https://leetcode.com/problems/length-of-last-word/
 * 
 */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = s => s.trim().split(" ").at(-1).length;
