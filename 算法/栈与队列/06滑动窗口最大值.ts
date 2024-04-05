// 239. 滑动窗口最大值

/*
思路：
    使用队列实现
    1、首先实现一个单调递减的队列，在队列中有入队、出队、查看队头元素（由于递减队列，队头元素即为最大值）
    2、入队规则：value如果大于队尾元素，则将队尾元素删除，直至队尾元素大于value，或者队列为空
    3、出队规则：只有当队头元素等于value，才出队

    注：其实队列没有必要维护窗口里的所有元素，只需要维护有可能成为窗口里最大值的元素就可以了，
        同时保证队列里的元素数值是由大到小的。
*/

/*
    时间复杂度: O(n)
    空间复杂度: O(k)
*/ 

function maxSlidingWindow(nums: number[], k: number): number[] {
    // 单调递减队列
    class MonoQueue {
        private queue: number[];

        constructor() {
            this.queue = [];
        }

        /*
            入队操作：
            1、value如果大于队尾元素，则将队尾元素删除，直至队尾元素大于value，或者队列为空
        */
        public enqueue(value: number): void {
            let back: number | undefined = this.queue[this.queue.length - 1]; // 队尾元素
            while (back !== undefined && back < value) {
                this.queue.pop();
                back = this.queue[this.queue.length - 1];
            }
            this.queue.push(value);
        }

        /*
            出队操作：
            1、只有当队头元素等于value，才出队
        */
        public dequeue(value: number): void {
            let top: number | undefined = this.top();
            if (top !== undefined && top === value) {
                this.queue.shift();
            }
        }

        // 获取队头元素
        public top() {
            return this.queue[0];
        }
    }

    const helperQueue: MonoQueue = new MonoQueue();
    let i: number = 0;
    let j: number = 0;
    let resArr: number[] = [];

    // 先将前K个元素放入队列
    while (j < k) {
        helperQueue.enqueue(nums[j++])
    }
    // 记录前K个元素的最大值 
    resArr.push(helperQueue.top()!);
    // 滑动窗口
    while (j < nums.length) {
        // 滑动窗口添加最后面的元素
        helperQueue.enqueue(nums[j]);
        // 滑动窗口移除最前面的元素
        helperQueue.dequeue(nums[i]);
        // 记录最大值
        resArr.push(helperQueue.top()!);
        j++;
        i++;
    }

    return resArr;
};