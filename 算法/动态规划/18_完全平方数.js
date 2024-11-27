/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let dp = new Array(n + 1).fill(Infinity); // 初始化dp数组，dp[i]表示i的完全平方数的最小个数
  dp[0] = 0; // 0的完全平方数个数为0

  for (let i = 1; i * i <= n; i++) {
    // 遍历所有可能的完全平方数(遍历物品)
    for (let j = i * i; j <= n; j++) {
      // 凑成正整数n（遍历背包）
      dp[j] = Math.min(dp[j], dp[j - i * i] + 1);
    }
  }

  return dp[n]; // 返回n的完全平方数的最小个数
};
