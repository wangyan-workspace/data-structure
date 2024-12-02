/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const [m, n] = [text1.length, text2.length]; // 获取 text1 和 text2 的长度
  // 状态：dp[i][j] 表示 text1[0...i-1] 和 text2[0...j-1] 的最长公共子序列的长度
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0)); // 初始化 dp 数组

  for (let i = 1; i <= m; i++) {
    // 遍历 text1
    for (let j = 1; j <= n; j++) {
      // 遍历 text2
      if (text1[i - 1] === text2[j - 1]) {
        // 如果 text1[i-1] 和 text2[j-1] 相等，则 dp[i][j] = dp[i-1][j-1] + 1
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // 如果 text1[i-1] 和 text2[j-1] 不相等，则 dp[i][j] = max(dp[i-1][j], dp[i][j-1])
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n]; // 返回 dp[m][n]，即 text1 和 text2 的最长公共子序列的长度
};
