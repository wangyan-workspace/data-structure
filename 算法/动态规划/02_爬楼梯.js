/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // dp[i] 为第 i 阶楼梯有多少种方法爬到楼顶
  // dp[i] = dp[i - 1] + dp[i - 2]
  let dp = [1, 2]; // 初始化前两个值

  for (let i = 2; i < n; i++) { // 从第三个开始计算
    dp[i] = dp[i - 1] + dp[i - 2]; // 爬到第 i 阶楼梯的方法数等于爬到第 i - 1 阶楼梯的方法数加上爬到第 i - 2 阶楼梯的方法数
  }

  return dp[n - 1]; // 返回爬到第 n 阶楼梯的方法数
};
