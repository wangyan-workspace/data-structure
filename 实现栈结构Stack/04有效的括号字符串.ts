import { Stack } from './01_栈的实现';

function checkStrings(s: string): boolean {
    const stack1 = new Stack<number>();
    const stack2 = new Stack<number>();

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '(':
                stack1.push(i);
                break;
            case '*':
                stack2.push(i);
                break;
            default:
                if (!stack1.isEmpty()) {
                    stack1.pop();
                } else if (!stack2.isEmpty()) {
                    stack2.pop();
                } else {
                    return false;
                }
                break;
        }
    }

    while (!stack1.isEmpty() && !stack2.isEmpty()) {
        const i = stack1.pop() as number;
        const j = stack2.pop() as number;

        if (i > j) {
            return false;
        }
    }

    return stack1.isEmpty();
}

console.log(checkStrings("(*))")); // true
console.log(checkStrings("((((*))")); // false
console.log(checkStrings("(*))(*)(*())*")); // true