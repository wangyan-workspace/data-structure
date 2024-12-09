/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
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

  let fast = head; //快指针
  let slow = head; //慢指针
  //求出中点
  while (fast !== null && fast.next !== null) {
    //fast.next !== null 是为了防止奇数个节点时，fast.next.next报错
    slow = slow.next; //慢指针每次走一步
    fast = fast.next.next; //快指针每次走两步
  }

  //right就是右半部分 12345 就是45  1234 就是34
  let right = slow.next;
  //断开左部分和右部分
  slow.next = null;
  //反转右部分 right就是反转后右部分的起点
  right = reverseList(right);
  //左部分的起点
  let left = head;
  //进行左右部分来回连接
  //这里左部分的节点个数一定大于等于右部分的节点个数 因此只判断right即可
  while (right !== null) {
    //当right为null时，说明右半部分已经连接完毕
    let curLeft = left.next; //保存左部分的下一个节点
    left.next = right; //左部分的当前节点指向右部分的当前节点
    left = curLeft; //左部分当前节点向后移动

    let curRight = right.next; //保存右部分的下一个节点
    right.next = left; //右部分的当前节点指向左部分的当前节点
    right = curRight; //右部分当前节点向后移动
  }
};
