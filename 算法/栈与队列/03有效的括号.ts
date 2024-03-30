// 20. 有效的括号

/*
思路：
    使用栈来实现
    1、如果是左括号，入栈对应右括号；
    2、如果是有括号，对应弹出栈顶元素，对比一下是否相同，若不同返回false
    3、最后，查看一下栈的length是否有值，若有值，返回false

*/ 
function isValid(s: string): boolean {
    const stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '(':
                stack.push(")");
                break;
            case '[':
                stack.push("]");
                break;
            case '{':
                stack.push("}");
                break;
            default:
                if (s[i] !== stack.pop()) {
                    return false;
                }
        }
    }

    return !Boolean(stack.length);
};