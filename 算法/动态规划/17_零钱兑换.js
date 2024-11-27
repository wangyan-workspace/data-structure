/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (!amount) return 0; // 如果金额为0，则不需要硬币，返回0

  let dp = new Array(amount + 1).fill(Infinity); // 初始化dp数组，长度为amount+1，初始值为Infinity
  dp[0] = 0; // 如果金额为0，则不需要硬币，返回0

  for (let i = 0; i < coins.length; i++) {
    // 遍历硬币数组
    for (let j = coins[i]; j <= amount; j++) {
      // 遍历金额，从当前硬币面值开始
      dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j]); // 更新dp[j]，取当前硬币面值和之前面值的最小值
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]; // 如果dp[amount]仍为Infinity，则表示无法凑齐该金额，返回-1；否则返回dp[amount]
};
