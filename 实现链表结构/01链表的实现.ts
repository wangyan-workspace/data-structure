// 定义节点
class Node<T> {
    value: T
    next: Node<T> | null = null
    constructor(value: T) {
        this.value = value;
    }
}

// 定义链表
class LinkedList<T> {
    private head: Node<T> | null = null;
    private size: number = 0;

    // 获取链表方法
    get length() {
        return this.size;
    }

    // (根据指定位置)获取当前节点
    private getNode(position: number): Node<T> | null {
        let current = this.head;
        let index = 0;

        // index < position
        while (index++ < position && current) {
            current = current.next;
        }

        // index === position
        return current;
    }

    // (在链表的最后)追加节点
    append(value: T) {
        // 1、根据value创建一个新的节点
        const newNode = new Node(value);

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

        // size++
        this.size++
    }

    // 遍历查看链表
    traverse() {
        const values: T[] = [];
        let current = this.head;

        while (current) {
            console.log(current.value);
            values.push(current.value);
            current = current.next;
        }

        console.log(values.join("->"));
        return values.join("->");
    }

    // 指定位置插入节点
    insert(value: T, position: number): boolean {
        // 越界判断
        if (position < 0 || position > this.size) {
            return false;
        }

        const newNode = new Node(value);

        // 插入头部
        if (position === 0) {
            // ***顺序不能变***
            newNode.next = this.head;
            this.head = newNode;
        } else {
            // 获取前一个节点
            let previous = this.getNode(position - 1);
            // ***顺序不能变***
            newNode.next = previous?.next ?? null;
            previous!.next = newNode;
        }

        this.size++;

        return true;
    }

    // 指定位置删除节点
    removeAt(position: number): T | null {
        // 越界判断
        if (position < 0 || position >= this.size) {
            return null;
        }

        let current = this.head;
        // 删除头部节点
        if (position === 0) {
            this.head = current?.next ?? null;
        } else {
            // 获取前一个节点
            const previous = this.getNode(position - 1);
            previous!.next = previous!.next?.next ?? null;
        }

        this.size--;
        return current?.value ?? null;
    }

    // 获取某一(位置)节点的值
    getValue(position: number): T | null {
        // 越界判断
        if (position < 0 || position >= this.size) {
            return null;
        }

        console.log('getValue', position, this.getNode(position)?.value)
        return this.getNode(position)?.value ?? null;
    }

    //更新某一（位置）节点的value值
    update(value: T, position: number): boolean {
        // 越界判断
        if (position < 0 || position >= this.size) {
            return false;
        }

        // 获取位置节点
        const current = this.getNode(position);
        current!.value = value;

        return true;
    }

    // 获取某一值在链表中的位置
    indexOf(value: T): number {
        let current = this.head;
        let index = 0;

        // 从头开始遍历链表
        while (current) {
            if (current.value === value) {
                console.log(value, "-", index)
                return index;
            }
            // 以下两步，顺序无影响
            index++;
            current = current.next;
        }

        // 如果整个链表都没有匹配返回-1
        return -1;
    }

    // 通过指定value删除节点
    remove(value: T): T | null {
        const index = this.indexOf(value);
        return this.removeAt(index);
    }
}

const linkedList = new LinkedList();

console.log('---------测试append方法---------');
linkedList.append("aaa");
linkedList.append("bbb");
linkedList.append("ccc");
linkedList.append("ddd");
linkedList.traverse(); // aaa->bbb->ccc->ddd

console.log('---------测试insert方法---------');
linkedList.insert("abc", 0);
linkedList.insert("cba", 0);
linkedList.insert("bac", 4);
linkedList.insert("gfj", 7);
linkedList.insert("jk", -4);
linkedList.insert("erw", 10);
linkedList.traverse(); // cba->abc->aaa->bbb->bac->ccc->ddd->gfj

console.log('---------测试removeAt方法---------');
linkedList.removeAt(-1);
linkedList.removeAt(8);
linkedList.removeAt(0);
linkedList.removeAt(5);
linkedList.traverse(); // abc->aaa->bbb->bac->ccc->gfj

console.log('---------测试removeAt方法---------');
linkedList.getValue(-3);
linkedList.getValue(6);
linkedList.getValue(3); // bac
linkedList.getValue(5); // gfj
linkedList.traverse(); // abc->aaa->bbb->bac->ccc->gfj

console.log('---------测试update方法---------');
linkedList.update('job', 1);
linkedList.update('Alice', -1);
linkedList.update('koe', 6);
linkedList.update('why', 4);
linkedList.traverse(); // abc->job->bbb->bac->why->gfj

console.log('---------测试indexOf方法---------');
linkedList.indexOf('why'); // 4
linkedList.indexOf('yiu'); // -1
linkedList.indexOf('lucky'); // -1
linkedList.indexOf('abc'); // 0
linkedList.traverse(); // abc->job->bbb->bac->why->gfj

console.log('---------测试remove方法---------');
linkedList.remove('bbb');
linkedList.remove('job');
linkedList.remove('yyo');
linkedList.remove('gfj');
linkedList.traverse(); // abc->bac->why

export { }