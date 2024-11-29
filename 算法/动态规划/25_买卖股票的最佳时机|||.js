/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length; // 数组长度
  // 确定dp数组以及下标的含义
  // 一天一共就有五个状态，
  // 1、没有操作 （其实我们也可以不设置这个状态）
  // 2、第一次持有股票
  // 3、第一次不持有股票
  // 4、第二次持有股票
  // 5、第二次不持有股票
  //   dp[i][j]中 i表示第i天，j为 [0 - 4] 五个状态，dp[i][j]表示第i天状态j所剩最大现金。
  let dp = new Array(len).fill([0, 0, 0, 0, 0]); //   dp数组初始化
  dp[0][1] = -prices[0]; // 第0天做第一次买入的操作
  dp[0][3] = -prices[0]; // 第0天做第二次买入的操作

  for (let i = 1; i < len; i++) {
    // 遍历每一天，根据前一天的状态来推导今天的状态
    dp[i][0] = dp[i - 1][0]; // 没有操作，状态不发生变化
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]); // 第一次持有股票，取决于前一天持有或前一天不持有今天买入
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i]); // 第一次不持有股票，取决于前一天不持有或前一天持有今天卖出
    dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i]); // 第二次持有股票，取决于前一天持有或前一天不持有今天买入
    dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i]); // 第二次不持有股票，取决于前一天不持有或前一天持有今天卖出
  }

  return dp[len - 1][4]; // 最后一天第二次卖出后的状态就是我们所求的最大利润
};
