/*
 * @Author: wangyan-workspace 2107014530@qq.com
 * @Date: 2024-10-14 18:27:38
 * @LastEditors: wangyan-workspace 2107014530@qq.com
 * @LastEditTime: 2024-10-14 18:34:05
 * @FilePath: /data-structure/算法/链表/移除链表元素.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// 设置一个虚拟头结点在进行删除操作
var removeElements = function(head, val) {
    // 添加虚拟头节点
    let ret = new ListNode(0,head); // 虚拟头节点
    let cur = ret; // 当前节点

    while(cur.next) { // 遍历链表
        if(cur.next.val === val) { // 如果当前节点的下一个节点的值等于val
            cur.next = cur.next.next; // 将当前节点的下一个节点指向下一个节点的下一个节点
            continue; // 继续下一次循环
        }
        cur = cur.next; // 否则将当前节点指向下一个节点
    }

    return ret.next; // 返回虚拟头节点的下一个节点(即头节点)
};

// 时间复杂度: O(n)
// 空间复杂度: O(1)

// 直接使用原来的链表来进行删除操作
var removeElements = function(head, val) {
    // 删除头节点
    while(head !== null && head.val === val){
        head = head.next;
    }
    if(head === null){
        return head;
    }
    // 删除非头节点
    let pre = head; // 前一个节点
    let cur = head.next; // 当前节点

    while(cur){ // 遍历链表
        if(cur.val === val){ // 如果当前节点的下一个节点的值等于val
            pre.next = cur.next; // 将前一个节点的下一个节点指向当前节点的下一个节点
        } else {
            pre = pre.next; // 否则将前一个节点指向当前节点
        }
        cur = cur.next; // 将当前节点指向下一个节点
    }

    return head; // 返回头节点
}

// 时间复杂度: O(n)
// 空间复杂度: O(1)