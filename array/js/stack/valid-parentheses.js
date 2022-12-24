/** https://leetcode.com/problems/valid-parentheses/

Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Test Case 1
Input: s = "()"
Output: true

Test Case 2
Input: s = "()[]{}"
Output: true

Test Case 3
Input: s = "(]"
Output: false

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

 */


/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        switch (c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }

    return stack.length === 0;
};

console.log(isValid("()[]{}")) // true 
