class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
// 思路：
// 1、让current节点指向下一个节点。 目的：保留着下一个节点的引用可以拿到，幷且不会销毁
// 2、改变head当前指向的节点，指向newHead。  对于第一个节点来说，指向newHead就是指向null
// 3、让newHead指向head节点
// 4、让head移向下一个节点，指向current
function reverseList(head: ListNode | null): ListNode | null {
    // 1、判断节点为null，或者只要一个节点，那么直接返回即可
    if(head === null || head.next === null) return head;

    // 2、反转链表结构
    let newHead:ListNode | null = null;

    while(head) {
        let current: ListNode | null = head.next;
        head.next = newHead;
        newHead = head;
        head = current;
    }

    return newHead;
};

// 模拟数据进行测试
const node1 = new ListNode(1);
node1.next = new ListNode(2);
node1.next.next = new ListNode(3);

const newHead = reverseList(node1);

let current = newHead;
while(current) {
    console.log(current.val);
    current = current.next;
}

export {}