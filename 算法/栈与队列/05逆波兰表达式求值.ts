// 150. 逆波兰表达式求值

/*
思路：
    使用栈来实现
    1、每一个子表达式要得出一个结果，然后拿这个结果再进行运算
    2、这和1047. 删除字符串中的所有相邻重复项 (opens new window)是差不多的，
    只不过本题不要相邻元素做消除了，而是做运算！！！
*/

function evalRPN(tokens: string[]): number {
    let helperStack: number[] = [];
    // 按照顺序来是先入栈 （+，-，*，/）相邻的后入栈的元素，
    // 对于（+、*）计算没有什么顺序的要求
    // 对于（-，/）顺序不一样，结果也就不一样
    // 这个地方就需要用到temp进行存储新弹出来（后入栈）的元素
    let temp: number;
    let i: number = 0;

    while (i < tokens.length) {
        let t: string = tokens[i];
        switch (t) {
            case '+':
                temp = helperStack.pop()! + helperStack.pop()!;
                helperStack.push(temp);
                break;
            case '-':
                temp = helperStack.pop()!;
                temp = helperStack.pop()! - temp;
                helperStack.push(temp);
                break;
            case '*':
                temp = helperStack.pop()! * helperStack.pop()!;
                helperStack.push(temp);
                break;
            case '/':
                temp = helperStack.pop()!;
                // 要求：两个整数之间的除法总是 向零截断
                // Math.trunc()方法会将参数隐式转换成数字类型后，纯粹的去除小数部分
                temp = Math.trunc(helperStack.pop()! / temp);
                helperStack.push(temp);
                break;
            default:
                // 需要运算，所以需要转换成数字类型
                helperStack.push(Number(t));
                break;
        }
        i++
    }

    return helperStack.pop()!;
};