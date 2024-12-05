/*
 * @Author: wangyan-workspace 2107014530@qq.com
 * @Date: 2024-10-11 22:07:51
 * @LastEditors: wangyan-workspace 2107014530@qq.com
 * @LastEditTime: 2024-10-11 22:09:15
 * @FilePath: /data-structure/算法/数组/区间和.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 为了计算数组 vec 中特定区间 [i, j] 的元素和，我们可以使用前缀和（prefix sum）技巧。
// 首先，我们创建一个新数组 p，其中 p[i] 表示 vec 中前 i 个元素的和。
// 然后，区间 [i, j] 的和可以通过查表得到，即 p[j] - p[i - 1]。
// 以下是实现这一功能的 JavaScript 代码：

function calculatePrefixSums(vec) {
    let p = [vec[0]];
    for (let i = 1; i < vec.length; i++) {
        p[i] = p[i - 1] + vec[i];
    }
    return p;
}
 
function calculateSubarraySum(p, i, j) {
    if (i === 0) return p[j];
    return p[j] - p[i - 1];
}
 
// 示例使用
const vec = [1, 2, 3, 4, 5];
const p = calculatePrefixSums(vec);
console.log(calculateSubarraySum(p, 1, 3)); 

// 在这个例子中，我们首先计算了数组 vec 的前缀和数组 p，
// 然后通过调用 calculateSubarraySum 函数来获取任意区间 [i, j] 的和。
// 这种方法的时间复杂度为 O(n)，因为我们只遍历数组一次来计算前缀和。
// 查询区间和的操作则是 O(1) 的时间复杂度。