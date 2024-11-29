/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  const len = prices.length; // 数组长度
  let dp = new Array(len).fill([0, 0]); // dp[i][0] 表示第i天持有股票的最大收益，dp[i][1] 表示第i天不持有股票的最大收益
  dp[0][0] = -prices[0]; // 初始化

  for (let i = 1; i < len; i++) {
    // 从第二天开始遍历
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]); // 如果第i天持有股票，那么可能是前一天持有，或者前一天不持有，今天买入，取这两种情况的最大值
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee); // 如果第i天不持有股票，那么可能是前一天不持有，或者前一天持有，今天卖出，取这两种情况的最大值
  }

  return dp[len - 1][1]; // 最后一天不持有股票的最大收益就是最大利润
};
