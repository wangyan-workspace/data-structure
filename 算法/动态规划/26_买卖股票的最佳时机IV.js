/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  if (prices == null || prices.length < 2 || k == 0) {
    return 0;
  }
  const len = prices.length; // 数组长度

  let dp = new Array(len).fill().map(() => new Array(2 * k + 1).fill(0)); // dp[i][j] 表示第i天，持有j次股票的最大利润

  // 初始化dp数组，初始化第一天k次买入的最大利润
  for (let j = 1; j < 2 * k; j += 2) {
    dp[0][j] = 0 - prices[0];
  }

  for (let i = 1; i < len; i++) {
    // 遍历每一天
    for (let j = 0; j < 2 * k; j += 2) {
      // 遍历k次买入
      dp[i][j + 1] = Math.max(dp[i - 1][j + 1], dp[i - 1][j] - prices[i]); // 第i天买入，第i天持有j次股票的最大利润
      dp[i][j + 2] = Math.max(dp[i - 1][j + 2], dp[i - 1][j + 1] + prices[i]); // 第i天卖出，第i天持有j次股票的最大利润
    }
  }

  return dp[len - 1][2 * k]; // 返回最后一天卖出股票的最大利润
};
