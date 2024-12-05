function minSubArrayLen(target: number, nums: number[]): number {
    let start: number = 0, // 起始位置
        end: number = 0, // 结束位置
        len: number = nums.length, // 当前数组长度
        sum: number = 0, // 滑窗内数字加和
        res: number = Infinity; // 当前窗口的值大于等于s的数字组成个数

    while (end < len) {
        sum += nums[end];

        while (sum >= target) {
            res = Math.min(res, end - start + 1); // 找出最小组成个数
            sum -= nums[start]; // 窗口滑动，去掉最前面窗口的数字加和部分
            start++; // 窗口滑动，起始位置向后移动一个
        }

        end++;
    }

    return res === Infinity ? 0 : res;
};