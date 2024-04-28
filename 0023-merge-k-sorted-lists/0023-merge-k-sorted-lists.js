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
    // Custom comparator function to sort nodes by their values
    const compareNodes = (a, b) => a.val - b.val;

    // Priority queue to store the head nodes of lists
    const pq = [];

    // Initialize the priority queue with the head nodes of lists
    for (const list of lists) {
        if (list) pq.push(list);
    }

    // Sort the priority queue based on node values
    pq.sort(compareNodes);

    // Dummy node to simplify list construction
    const dummy = new ListNode(-1);
    let current = dummy;

    // Merge lists by popping the smallest node from the priority queue
    while (pq.length > 0) {
        // Pop the smallest node from the priority queue
        const smallest = pq.shift();
        current.next = smallest;
        current = current.next;

        // Push the next node from the same list to the priority queue
        if (smallest.next) pq.push(smallest.next);

        // Re-sort the priority queue after adding a new node
        pq.sort(compareNodes);
    }

    return dummy.next;
};