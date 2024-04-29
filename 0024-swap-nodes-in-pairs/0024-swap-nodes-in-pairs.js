/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
     const dummy = new ListNode(-1);
    dummy.next = head;

    let current = dummy;

    while (current.next && current.next.next) {
        const firstNode = current.next;
        const secondNode = current.next.next;

        // Swap values between the first and second nodes
        let temp = firstNode.val;
        firstNode.val = secondNode.val;
        secondNode.val = temp;

        // Move to the next pair of nodes
        current = current.next.next;
    }

    return dummy.next;
};