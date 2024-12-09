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
var hasCycle = function (head) {
  let fast = head; // 快指针
  let slow = head; // 慢指针

  // 空链表、单节点链表一定不会有环
  while (fast != null && fast.next !== null) {
    slow = slow.next; // 慢指针，一次移动一步
    fast = fast.next.next; // 快指针，一次移动两步

    if (slow === fast) return true; // 快慢指针相遇，表明有环
  }

  return false; // 正常走到链表末尾，表明没有环
};
