/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  let dp = new Array(n + 1).fill(0); // dp[i]表示整数i拆分后的最大乘积

  dp[2] = 1; // 初始化，2只能拆分为1+1，乘积为1

  for (let i = 3; i <= n; i++) {
    // 从3开始遍历到n
    for (let j = 1; j <= i / 2; j++) {
      // j表示拆分的第一个数，从1开始遍历到i/2
      dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j); // 更新dp[i]，取dp[i-j]*j和(i-j)*j的最大值
    }
  }

  return dp[n]; // 返回dp[n]，即整数n拆分后的最大乘积
};
