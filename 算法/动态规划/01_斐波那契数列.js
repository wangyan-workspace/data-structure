/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let dp = [0, 1]; // dp[i] 表示第 i 个斐波那契数

  for (let i = 2; i <= n; i++) {
    // 从第 3 个斐波那契数开始计算
    dp[i] = dp[i - 1] + dp[i - 2]; // 第 i 个斐波那契数等于前两个斐波那契数之和
  }

  return dp[n]; // 返回第 n 个斐波那契数
};
