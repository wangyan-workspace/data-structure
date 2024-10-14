/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 双指针法
var reverseList = function(head) { 
    if(!head || !head.next){
        return head;
    }

    let temp = null, pre = null, cur = head;
    while(cur) { //cur 指针指向null，循环结束，链表也反转完毕
        temp = cur.next; // temp保存cur的next节点（因为接下来要改变 cur->next 的指向）
        cur.next = pre; // cur->next 指向pre
        pre = cur;  // pre 指针向后移动
        cur = temp; // cur指针向后移动
    }

    return pre; // pre指针就指向了新的头结点
};