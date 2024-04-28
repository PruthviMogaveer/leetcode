/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const compareNodes = (a, b) => a.val - b.val;

    const pq = [];

    for (const list of lists) {
        if (list) pq.push(list);
    }

    pq.sort(compareNodes);

    const dummy = new ListNode(-1);
    let current = dummy;

    while (pq.length > 0) {
        const smallest = pq.shift();
        current.next = smallest;
        current = current.next;

        if (smallest.next) pq.push(smallest.next);

        pq.sort(compareNodes);
    }

    return dummy.next;
};