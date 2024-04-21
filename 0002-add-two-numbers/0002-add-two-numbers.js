/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode();
    let current = dummyHead;
    let carry = 0;

    while (l1 || l2 || carry) {
        let sum = carry + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
        carry = Math.floor(sum / 10);

        // Update current node value or create new node if necessary
        if (!current.next) {
            current.next = new ListNode(sum % 10);
        } else {
            current.next.val = sum % 10;
        }
        current = current.next;

        // Move to next nodes
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return dummyHead.next;
};