// 1047. 删除字符串中的所有相邻重复项

/*
思路：
    使用栈来实现
    1、用栈来存放，那么栈的目的，就是存放遍历过的元素，当遍历当前的这个元素的时候，
    去栈里看一下我们是不是遍历过相同数值的相邻元素
    2、如果栈顶元素跟当前遍历的元素相同，则弹出栈顶元素
    3、如果栈顶元素跟当前遍历的元素不同，则当前元素入栈
    4、最后将栈中元素弹出，按顺序拼接为字符串，反转该字符串即为在完成所有重复项删除操作后返回最终的字符串。
*/

/*
    时间复杂度: O(n)
    空间复杂度: O(n)
*/
function removeDuplicates(s: string): string {
    const helperStack: string[] = [];
    let i: number = 0;

    while (i < s.length) {
        let top: string = helperStack[helperStack.length - 1];

        if (s[i] === top) {
            helperStack.pop();
        } else {
            helperStack.push(s[i]);
        }

        i++;
    }

    let res: string = '';

    while (helperStack.length > 0) {
        res = helperStack.pop() + res;
    }

    return res;
};