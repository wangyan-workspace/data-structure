import { Stack } from "./01_栈的实现";

function isValid(s: string): boolean {
    const stack = new Stack<string>();

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "(":
                stack.push(")")
                break;
            case "{":
                stack.push("}")
                break;
            case "[":
                stack.push("]")
                break;
            default:
                if (stack.pop() !== s[i]) {
                    return false;
                }
                break;
        }
    }
    return stack.isEmpty();
}

console.log(isValid('}{'));
console.log(isValid('(){}[]{'));
console.log(isValid('([{}]){}[]')); 
