/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  let dp = new Array(amount + 1).fill(0); // dp[i]表示凑成i元的方法数
  dp[0] = 1; // 初始化，凑成0元的方法数为1

  for (let i = 0; i < coins.length; i++) {
    // 遍历硬币
    for (let j = coins[i]; j <= amount; j++) {
      // 遍历金额
      dp[j] += dp[j - coins[i]]; // 状态转移方程,凑成j元的方法数等于凑成j-coins[i]元的方法数加上凑成j元的方法数
    }
  }

  return dp[amount]; // 返回凑成amount元的方法数
};
