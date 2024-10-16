/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let arr = s.split(''); // 将字符串转为数组

    // 遍历字符串的过程中，只要让 i += (2 * k)，i 每次移动 2 * k 就可以了，然后判断是否需要有反转的区间
    // 当需要固定规律一段一段去处理字符串的时候，要想想在在for循环的表达式上做做文章
    for(let i = 0; i < arr.length; i += 2 * k) {
        let left = i; // 左指针
        let right = Math.min(i + k - 1, arr.length - 1); // 防止越界 右指针

        while(left < right) { // 双指针交换
            [arr[left], arr[right]] = [arr[right], arr[left]]; // 交换
            left++; // 左指针右移
            right--; // 右指针左移
        }
    }

    return arr.join(''); // 将数组转为字符串
};

// 时间复杂度: O(n)
// 空间复杂度: O(1)