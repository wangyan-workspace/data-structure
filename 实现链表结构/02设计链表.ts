// 定义节点
// leetcode不需要定义内置了这个listNode类
class ListNode<T> {
    value: T
    next: ListNode<T> | null = null
    constructor(value: T) {
        this.value = value;
    }
}

class MyLinkedList<T = number> {
    private head: ListNode<T> | null = null;
    private size: number = 0;

    // (根据指定位置)获取当前节点
    private getNode(position: number): ListNode<T> | null {
        let current = this.head;
        let index = 0;

        // index < position
        while (index++ < position && current) {
            current = current.next;
        }

        // index === position
        return current;
    }

    // 获取链表中下标为 index 的节点的值。如果下标无效，则返回 -1
    get(index: number): T | number | null {
        if (index < 0 || index > this.size - 1) {
            return -1;
        }

        return this.getNode(index)?.value ?? null;
    }

    // 将一个值为 val 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点
    addAtHead(val: T): void {
        // 1、根据value创建一个新的节点
        const newNode = new ListNode(val);

        newNode.next = this.head;
        this.head = newNode;

        this.size++;
    }

    // 将一个值为 val 的节点追加到链表中作为链表的最后一个元素
    addAtTail(val: T): void {
        // 1、根据value创建一个新的节点
        const newNode = new ListNode(val);

        let current = this.head;

        // 2、判断head是否为null
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            // current肯定指向最后一个节点
            current.next = newNode;
        }

        this.size++
    }

    // 将一个值为 val 的节点插入到链表中下标为 index 的节点之前。
    addAtIndex(index: number, val: T): void {
        // 越界判断
        if (index < 0 || index > this.size) {
            return;
        }

        const newNode = new ListNode(val);

        // 插入头部
        if (index === 0) {
            // ***顺序不能变***
            newNode.next = this.head;
            this.head = newNode;
        } else {
            // 获取前一个节点
            let previous = this.getNode(index - 1);
            // ***顺序不能变***
            newNode.next = previous?.next ?? null;
            previous!.next = newNode;
        }

        this.size++;
    }

    deleteAtIndex(index: number): void {
        // 越界判断
        if (index < 0 || index >= this.size) {
            return;
        }

        let current = this.head;
        // 删除头部节点
        if (index === 0) {
            this.head = current?.next ?? null;
        } else {
            // 获取前一个节点
            const previous = this.getNode(index - 1);
            previous!.next = previous!.next?.next ?? null;
        }

        this.size--;
    }
}

export { }