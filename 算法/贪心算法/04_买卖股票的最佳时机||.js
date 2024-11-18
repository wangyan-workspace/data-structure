/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let result = 0; // 保存结果

  for (let i = 1; i < prices.length; i++) {
    // 遍历数组,从第二天开始
    result += Math.max(prices[i] - prices[i - 1], 0); // 如果今天比昨天高,则计算利润,否则不计算
  }
  return result; // 返回结果
};
