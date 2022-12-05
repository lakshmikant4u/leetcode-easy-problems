/** https://leetcode.com/problems/merge-two-binary-trees/

Merge Two Binary Trees

You are given two binary trees root1 and root2.

Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

Return the merged tree.

Note: The merging process must start from the root nodes of both trees.

Test Case 1
Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
Output: [3,4,5,5,4,null,7]

Test Case 2
Input: root1 = [1], root2 = [1,2]
Output: [2,2]

Constraints:

The number of nodes in both trees is in the range [0, 2000].
-104 <= Node.val <= 104

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// Utility functions to save or print the tree in Array format
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function createBSTree(arr, i) {
    let root = null;
    if (i < arr.length) {
        root = new TreeNode(arr[i]);
        root.left = createBSTree(arr, 2 * i + 1); // left child
        root.right = createBSTree(arr, 2 * i + 2); // right child
    }
    return root;
}

function getTreeInArray(root, arr = [], i) {
    if (root != null) {
        arr[i] = root.val;
        getTreeInArray(root.left, arr, 2 * i + 1);
        getTreeInArray(root.right, arr, 2 * i + 2);
    }
    return arr
}

// Solution 1
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
const mergeTrees = (root1, root2) => {

    if (!root1 && !root2) {
        return null;
    }
    if (!root1) {
        return root2;
    }
    if (!root2) {
        return root1;
    }

    root1.val += root2.val;
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);

    return root1;
};


let arr1 = [1, 3, 2, 5];
let arr2 = [2, 1, 3, null, 4, null, 7];
let root1 = createBSTree(arr1, 0);
let root2 = createBSTree(arr2, 0);
let res1 = mergeTrees(root1, root2)
console.log(getTreeInArray(res1, [], 0)); // [3, 4, 5, 5, 4, null, 7]

// Solution 2
const mergeTrees2 = (root1, root2) => {
    if (!root1) {
        return root2;
    }

    if (!root2) {
        return root1;
    }

    root1.val = root1.val + root2.val;
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);

    return root1;
};

let arr3 = [1,];
let arr4 = [1, 2];
let root3 = createBSTree(arr3, 0);
let root4 = createBSTree(arr4, 0);
let res2 = mergeTrees(root3, root4);
console.log(getTreeInArray(res2, [], 0)); // [2, 2]