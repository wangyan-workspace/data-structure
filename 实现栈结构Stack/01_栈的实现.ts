// 定义栈的接口类型
interface IStack<T> {
    push(element: T): void; // 入栈
    pop(): T | undefined; // 出栈
    peek(): T | undefined; // 返回栈顶元素
    isEmpty(): boolean; // 栈是否为空
    size(): number; // 栈的大小
}

class Stack<T = string> implements IStack<T> {
    private data: T[] = [];
    push(element: T) {
        this.data.push(element);
    };
    pop(): T | undefined {
        return this.data.pop();
    };
    peek(): T | undefined {
        return this.data[this.data.length - 1]
    };
    isEmpty(): boolean {
        return this.data.length === 0;
    };
    size(): number {
        return this.data.length;
    };
}

export { Stack }