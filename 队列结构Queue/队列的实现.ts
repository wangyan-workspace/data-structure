interface IQueue<T> {
    // 入队
    enqueue(element: T): void;
    // 出队
    dequeue(): T | undefined;
    // 返回队列中第一个元素（不改变队列）
    peek(): T | undefined;
    // 判断队列是否为空
    isEmpty(): boolean;
    // 获取队列长度
    size(): number;
}

class ArrayQueue<T> implements IQueue<T> {
    // 内部是通过数组保存
    private data: T[] = [];
    enqueue(element: T): void {
        this.data.push(element);
    }
    dequeue(): T | undefined {
        return this.data.shift();
    }
    peek(): T | undefined {
        return this.data[0];
    }
    isEmpty(): boolean {
        return this.data.length === 0;
    }
    size(): number {
        return this.data.length;
    }
}

export { ArrayQueue };