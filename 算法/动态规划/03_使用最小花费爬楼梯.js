/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const dp = [0, 0]; // dp[i]表示到达第i个台阶的最小花费

  for (let i = 2; i <= cost.length; i++) {
    // 从第三个台阶开始计算,因为前两个台阶的花费为0,不需要计算,直接赋值
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]); // 到达第i个台阶的最小花费为到达第i-1个台阶的最小花费加上第i-1个台阶的花费,和到达第i-2个台阶的最小花费加上第i-2个台阶的花费中的较小值
  }
  return dp[cost.length]; // 返回到达最后一个台阶的最小花费
};
