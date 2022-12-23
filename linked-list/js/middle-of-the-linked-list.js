/** https://leetcode.com/problems/middle-of-the-linked-list/

Middle of the Linked List

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Test Case 1
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Test Case 2
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

Constraints:

The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100

*/

/**
 * 
 * @param {*} head 
 * @param {*} slow 
 * @param {*} fast 
 * @returns 
 */
const middleNode = (head, slow = head, fast = head) => {
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function SinglyListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// Input: head = [1, 2, 3, 4, 5]
let node1 = new SinglyListNode(1);
let node2 = new SinglyListNode(2);
let node3 = new SinglyListNode(3);
let node4 = new SinglyListNode(4);
let node5 = new SinglyListNode(5);


let head = node1; // 1 -> null
node1.next = node2; // 1 -> 2 -> null
node2.next = node3; // 1 -> 2 -> 3 -> null
node3.next = node4; // 1 -> 2 -> 3 -> 4 -> null
node4.next = node5; // 1 -> 2 -> 3 -> 4 -> 5 -> null

console.log(middleNode(head)); // 3 -> 4 -> 5 -> null


/**
run below commond in terminal to get output

command -> node middle-of-the-linked-list.js 

output -> SinglyListNode {
            val: 3,
            next: SinglyListNode {
                val: 4,
                next: SinglyListNode { val: 5, next: null }
            }
        }
 */

let node6 = new SinglyListNode(6);
node5.next = node6; // 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null

var middleNode2 = function (head) {
    let fast = head
    let slow = head

    while (fast?.next) {
        slow = slow.next
        fast = fast.next?.next
    }

    return slow
};

console.log(middleNode2(head)); // 4 -> 5 -> 6 -> null

/**
run below commond in terminal to get output

command -> node middle-of-the-linked-list.js 

output -> SinglyListNode {
            val: 4,
            next: SinglyListNode {
                val: 5,
                next: SinglyListNode { val: 6, next: null }
            }
        }
 */

