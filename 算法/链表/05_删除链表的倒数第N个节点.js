function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 双指针法
var removeNthFromEnd = function (head, n) {
  let newNode = new ListNode(0, head); // 创建一个虚拟头节点
  let fast = newNode; // 快指针
  let slow = newNode; // 慢指针

  while (n) {
    // 快指针先走n步
    fast = fast.next;
    n--; // 快指针走完n步后，快指针和慢指针之间相差n步
  }

  while (fast?.next !== null) {
    fast = fast?.next; // 快指针和慢指针同时走，当快指针走到最后一个节点时，慢指针指向倒数第n个节点的前一个节点
    slow = slow?.next; // 慢指针指向倒数第n个节点的前一个节点
  }
  slow.next = slow.next.next; // 删除倒数第n个节点
  return newNode.next; // 返回头节点
};

// 时间复杂度: O(n)
// 空间复杂度: O(1)

