/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const current = new ListNode();
    let dummy = current
    while(list1 != null && list2 != null){
        if(list1.val<list2.val){
            dummy.next = list1
            list1 = list1.next
        }else{
            dummy.next = list2
            list2 = list2.next
        }
        dummy = dummy.next
    }
    if(list1 !== null)
        dummy.next = list1
    else
        dummy.next = list2
    return current.next
};