class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// 背景：无法访问 第一个节点  head
// 思想：将当前节点的value值修改为下一节点的value值,当前节点的指针指向，指向下一节点的下一节点
// 变成下一个节点，然后将下一个节点删掉
function deleteNode(node: ListNode | null): void {
    node!.val = node!.next!.val;
    node!.next = node!.next!.next;
};