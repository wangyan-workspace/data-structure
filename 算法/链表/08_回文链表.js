/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 反转链表
  const reverseList = (head) => {
    let temp = null; // 临时节点,保存cur的next节点
    let pre = null; // 保存cur的前一个节点
    let cur = head; // cur指向头节点

    while (cur) {
      //cur 指针指向null，循环结束，链表也反转完毕
      temp = cur.next; // temp保存cur的next节点（因为接下来要改变 cur->next 的指向）
      cur.next = pre; // cur->next 指向pre
      pre = cur; // pre 指针向后移动
      cur = temp; // cur指针向后移动
    }

    return pre; // pre指针就指向了新的头结点
  };
  // 如果为空或者仅有一个节点，返回true
  if (!head && !head.next) return true;
  let slow = head; // 慢指针
  let fast = head; // 快指针
  let pre = head; // 记录slow的前一个结点

  while (fast !== null && fast.next !== null) {
    pre = slow; // 记录slow的前一个结点
    slow = slow.next; // 慢指针走一步
    fast = fast.next.next; // 快指针走两步
  }
  pre.next = null; // 分割两个链表
  // 前半部分
  let cur1 = head;
  // 后半部分。这里使用了反转链表
  let cur2 = reverseList(slow);

  while (cur1 !== null) {
    if (cur1.val !== cur2.val) {
      // 如果有不相等的，返回false
      return false;
    }
    // 注意要移动两个结点
    cur1 = cur1.next;
    cur2 = cur2.next;
  }
  return true; // 如果都相等，返回true
};
