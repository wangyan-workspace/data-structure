// 225. 用队列实现栈

/*
思路：
    版本一: 使用两个队列
        1、要用两个队列来模拟栈，只不过没有输入和输出的关系，而是另一个队列完全用来备份的！
        2、用两个队列que1和que2实现队列的功能，que2其实完全就是一个备份的作用，
        把que1最后面的元素以外的元素都备份到que2，然后弹出最后面的元素，再把其他元素从que2导回que1。
    版本二：使用一个队列
        1、push操作，将元素入队，pop数据时，将队列中除了最后面的元素以外的元素，全部弹出，
        按弹出顺序重新入队到队列中，然后弹出最后面的元素
*/

/*
    时间复杂度: pop为O(n)，其他为O(1)
    空间复杂度: O(n)
*/

// 版本一
class MyStack {
  private queue: number[]; // 输入队列
  private tempQueue: number[]; // 输出队列

  constructor() {
    this.queue = []; // 输入队列
    this.tempQueue = []; // 输出队列
  }

  push(x: number): void {
    this.queue.push(x); // 输入队列push元素
  }

  pop(): number {
    // tempQueue 备份 queue 中的数据
    for (let i = 0, length = this.queue.length - 1; i < length; i++) {
      this.tempQueue.push(this.queue.shift()!);
    }
    let res = this.queue.pop()!;

    // 将queue数据还原
    let temp: number[] = this.queue;
    this.queue = this.tempQueue;
    this.tempQueue = temp;

    return res;
  }

  top(): number {
    const res: number = this.pop();
    this.push(res); // 将弹出的元素重新入队
    return res;
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}

// 版本二
class MyStack1 {
  private queue: number[];

  constructor() {
    this.queue = []; // 队列
  }

  push(x: number): void {
    this.queue.push(x); // 队列push元素
  }

  pop(): number {
    for (let i = 0, length = this.queue.length - 1; i < length; i++) { // 队列中除了最后一个元素外，其他元素都放到队列的末尾   
      this.queue.push(this.queue.shift()!);
    }

    return this.queue.shift()!;
  }

  top(): number {
    const res = this.pop();
    this.push(res); // 将弹出的元素重新入队
    return res;
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}

export {};
