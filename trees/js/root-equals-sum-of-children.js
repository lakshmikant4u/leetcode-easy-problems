/** https://leetcode.com/problems/root-equals-sum-of-children/

Root Equals Sum of Children
You are given the root of a binary tree that consists of exactly 3 nodes: the root, its left child, and its right child.

Return true if the value of the root is equal to the sum of the values of its two children, or false otherwise.

Test Case 1
Input: root = [10,4,6]
Output: true
Explanation: The values of the root, its left child, and its right child are 10, 4, and 6, respectively.
10 is equal to 4 + 6, so we return true.

Test Case 2
Input: root = [5,3,1]
Output: false
Explanation: The values of the root, its left child, and its right child are 5, 3, and 1, respectively.
5 is not equal to 3 + 1, so we return false.

Constraints:

The tree consists only of the root, its left child, and its right child.
-100 <= Node.val <= 100

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const checkTree = root => root.val === (root.left.val + root.right.val);

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// root = [10, 4, 6]
let tNode1 = new TreeNode(10);
let tNode2 = new TreeNode(4);
let tNode3 = new TreeNode(6);

tNode1.left = tNode2;
tNode1.right = tNode3;

let root = tNode1;
console.log(checkTree(root)); // true
