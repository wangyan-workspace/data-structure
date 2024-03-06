import { ArrayQueue } from './队列的实现';

function hotPhoto(names: string[], num: number) {
    // 1、创建队列结构
    const queue = new ArrayQueue<string>();

    // 2、将所有name入队操作
    for (const name of names) {
        queue.enqueue(name);
    }

    // 3、淘汰规则
    while (queue.size() > 1) {
        // 1 / 2不淘汰
        for (let i = 1; i < num; i++) {
            const name = queue.dequeue();
            if (name) queue.enqueue(name);
        }

        // 3 淘汰
        queue.dequeue();
    }

    return queue.dequeue();
}

const luckyName = hotPhoto(["why", "james", "kobe", "curry"], 3); 
console.log("luckyName", luckyName); // why
