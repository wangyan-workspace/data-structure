/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let fast = head; // 快指针
  let slow = head; // 慢指针

  while (fast !== null && fast.next !== null) { // 快指针和快指针的下一个节点不为空
    fast = fast.next.next; // 快指针每次走两步
    slow = slow.next; // 慢指针每次走一步

    if (fast === slow) { // 快慢指针相遇，说明有环
      slow = head; // 将慢指针重新指向头节点

      while (slow !== fast) { // 快慢指针再次相遇，说明环的入口
        slow = slow.next; // 慢指针每次走一步
        fast = fast.next; // 快指针每次走一步
      }

      return slow; // 返回环的入口
    }
  }
  return null; // 没有环，返回null
};
