/** https://leetcode.com/problems/path-sum/

Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding 
up all the values along the path equals targetSum.

A leaf is a node with no children.

Test Case 1
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.

Test Case 2
Input: root = [1,2,3], targetSum = 5
Output: false
Explanation: There two root-to-leaf paths in the tree:
(1 --> 2): The sum is 3.
(1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5.

Test Case 3
Input: root = [], targetSum = 0
Output: false
Explanation: Since the tree is empty, there are no root-to-leaf paths.

Constraints:

The number of nodes in the tree is in the range [0, 5000].
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000

 */


// Solution 1
/**
  Definition for a binary tree node.
  */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (root, targetSum) => {
    if (root == null) return 0;
    root_list = [];

    function search(root) {
        if (root.left != null) {
            root.left.val += root.val
            root_list.push(root.left)
        }
        if (root.right != null) {
            root.right.val += root.val
            root_list.push(root.right)
        }
        if (root.left == null && root.right == null) {
            if (root.val == targetSum) return true
        }
        while (0 < root_list.length) {
            return search(root_list.pop())
        }
        return false
    }
    return search(root)
};


// root = [5,4,8,11,null,13,4], targetSum = 20

let n1 = new TreeNode(4);
let n2 = new TreeNode(13);
let n3 = new TreeNode(11);
let n4 = new TreeNode(8, n2, n1);
let n5 = new TreeNode(4, n3);
let root = new TreeNode(5, n5, n4);

console.log(hasPathSum(root, 20)) // true
