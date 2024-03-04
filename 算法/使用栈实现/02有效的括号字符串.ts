function checkValidString(s: string): boolean {
    const stack1: number[] = [];
    const stack2: number[] = [];

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '(':
                stack1.push(i);
                break;
            case '*':
                stack2.push(i);
                break;
            default:
                if (stack1.length) {
                    stack1.pop();
                } else if (stack2.length) {
                    stack2.pop();
                } else {
                    return false;
                }
                break;
        }
    }

    while (stack1.length && !stack2.length) {
        const i = stack1.pop() as number;
        const j = stack2.pop() as number;

        if (i > j) {
            return false;
        }
    }

    return stack1.length === 0;
}

console.log(checkValidString("(*))")); // true
console.log(checkValidString("((((*))")); // false
console.log(checkValidString("(*))(*)(*())*")); // true