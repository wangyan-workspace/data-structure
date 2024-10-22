// 232. 用栈实现队列

/*
思路：
    1、在push数据的时候，只要数据放进输入栈就好，但在pop的时候，操作就复杂一些，
    输出栈如果为空，就把进栈数据全部导入进来（注意是全部导入），再从出栈弹出数据，
    如果输出栈不为空，则直接从出栈弹出数据就可以了。
    2、最后如何判断队列为空呢？如果进栈和出栈都为空的话，说明模拟的队列为空了。
*/

/*
    时间复杂度: push和empty为O(1), pop和peek为O(n)
    空间复杂度: O(n)
*/
class MyQueue {
  private stackIn: number[];
  private stackOut: number[];

  constructor() {
    this.stackIn = []; // 输入栈
    this.stackOut = []; // 输出栈
  }

  push(x: number): void {
    this.stackIn.push(x); // 直接把数据放进输入栈
  }

  pop(): number {
    if (this.stackOut.length === 0) {
      // 如果输出栈为空，则把输入栈的数据全部导入进来
      while (this.stackIn.length) {
        // 注意这里要用while，因为可能不止一次的导入
        this.stackOut.push(this.stackIn.pop()!); // 注意这里要用pop()，因为要获取输入栈的栈顶元素
      }
    }

    return this.stackOut.pop()!; // 直接从输出栈弹出数据
  }

  peek(): number {
    const temp: number = this.pop(); // 获取栈顶元素
    this.stackOut.push(temp); // 再把数据放回去
    return temp; // 返回栈顶元素
  }

  empty(): boolean {
    return this.stackIn.length === 0 && this.stackOut.length === 0; // 如果进栈和出栈都为空的话，说明模拟的队列为空了
  }
}

export {};
