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
        this.stackIn = [];
        this.stackOut = [];
    }

    push(x: number): void {
        this.stackIn.push(x);
    }

    pop(): number {
        if(this.stackOut.length === 0) {
            while(this.stackIn.length) {
                this.stackOut.push(this.stackIn.pop()!);
            }
        }

        return this.stackOut.pop()!;
    }

    peek(): number {
        const temp: number = this.pop();
        this.stackOut.push(temp);
        return temp;
    }

    empty(): boolean {
        return this.stackIn.length === 0 && this.stackOut.length === 0;
    }
}

export {};