/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length; // 数组长度
  let dp = new Array(len).fill([0, 0]); // 创建dp数组，dp[i][0] 表示第i天持有股票的最大收益，dp[i][1] 表示第i天不持有股票的最大收益
  dp[0] = [-prices[0], 0]; // 初始化

  for (let i = 1; i < len; i++) {
    // 遍历数组，从第1索引开始
    // 更新dp[i]
    dp[i] = [
      Math.max(dp[i - 1][0], -prices[i]), // 第i天持有股票的最大收益，要么是前一天持有股票的最大收益，要么是今天买入股票的最大收益
      Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]), // 第i天不持有股票的最大收益，要么是前一天不持有股票的最大收益，要么是今天卖出股票的最大收益
    ];
  }

  return dp[len - 1][1]; // 返回最后一天不持有股票的最大收益
};
