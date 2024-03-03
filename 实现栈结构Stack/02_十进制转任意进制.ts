import { Stack } from "./01_栈的实现";

function baseConverter(delNumber: number, base: number) {
    const stack = new Stack<number>();
    let target = '';

    // 十六进制中需要依次对应 A~F
    const digits = '0123456789ABCDEF';

    while (delNumber > 0) {
        let remainder = delNumber % base;
        stack.push(remainder);
        delNumber = Math.floor(delNumber % base); // 向下取整
    }

    while (!stack.isEmpty()) {
        target += digits[stack.pop() as number];
    }

    return target;
}

console.log(baseConverter(520, 2));
console.log(baseConverter(520, 8));
console.log(baseConverter(520, 16));
console.log(baseConverter(1314, 2));
console.log(baseConverter(1314, 8));
console.log(baseConverter(1314, 16));