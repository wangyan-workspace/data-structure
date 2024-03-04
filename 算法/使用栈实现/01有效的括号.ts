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

console.log(isValid('(){}[]{')) // false