/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0)); // 初始化dp数组

  let numOfZeros; // 记录当前字符串中0的个数
  let numOfOnes; // 记录当前字符串中1的个数

  for (let str of strs) {
    // 遍历字符串数组
    numOfZeros = 0; // 初始化当前字符串中0的个数
    numOfOnes = 0; // 初始化当前字符串中1的个数

    for (let s of str) {
      // 遍历当前字符串
      if (s === "0") {
        // 如果当前字符是0，则0的个数加1
        numOfZeros++;
      } else {
        // 如果当前字符是1，则1的个数加1
        numOfOnes++;
      }
    }
    // 字符串的zeroNum和oneNum相当于物品的重量（weight[i]），字符串本身的个数相当于物品的价值（value[i]）。
    for (let i = m; i >= numOfZeros; i--) {
      // 遍历dp数组(背包容量m)，从m到numOfZeros
      for (let j = n; j >= numOfOnes; j--) {
        // 遍历dp数组(背包容量n)，从n到numOfOnes
        dp[i][j] = Math.max(dp[i][j], dp[i - numOfZeros][j - numOfOnes] + 1); // 更新dp数组，取最大值
      }
    }
  }

  console.log("dp", dp);
  return dp[m][n];
};

console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3));
