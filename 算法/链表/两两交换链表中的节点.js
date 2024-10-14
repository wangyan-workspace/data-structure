class ListNode { // 定义链表节点
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function (head) {
    let ret = new ListNode(0, head), temp = ret; // 定义一个虚拟头节点，temp指向头节点,用于遍历链表
    while (temp.next && temp.next.next) { // 当temp的下一个节点和下下个节点存在时进行交换(直到到达链表末尾或只剩下一个节点,无法再进行两两交换)
      let cur = temp.next.next, pre = temp.next; // 保存节点
      
      // 交换相邻两个节点
      pre.next = cur.next;// pre指向cur的下一个节点
      cur.next = pre; // cur指向pre
      temp.next = cur; // temp指向cur

      temp = pre; // 移动temp到下一对要交换的节点之前
    }
    return ret.next; // 返回链表头节点
  };
console.log(swapPairs([1, 2, 3, 4, 5]));