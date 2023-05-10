//Linked List Cycle
//https://leetcode.com/problems/linked-list-cycle/



//approaching by taking two pointer as slow and fast and checking if they both becomes qual to each other then we can this list is having cycle
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) return false;
    var pre = head;
    var cur = head;
    while (pre && pre.next) {
        pre = pre.next.next;
        cur = cur.next;
        if (cur === pre) return true;
    }
    return false;
};
