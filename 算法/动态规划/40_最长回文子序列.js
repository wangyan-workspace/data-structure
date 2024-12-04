/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const len = s.length; // 字符串长度
  // dp[i][j]：字符串s在[i, j]范围内最长的回文子序列的长度为dp[i][j]。
  let dp = new Array(len).fill().map(() => new Array(len).fill(0)); // 初始化二维数组

  for (let i = 0; i < len; i++) {
    // 初始化对角线,当i与j相同，那么dp[i][j]一定是等于1的，即：一个字符的回文子序列长度就是1。
    dp[i][i] = 1;
  }

  for (let i = len - 1; i >= 0; i--) {
    // 从下往上遍历
    for (let j = i + 1; j < len; j++) {
      // 从左往右遍历
      if (s[i] === s[j]) {
        // 如果s[i]与s[j]相等，那么dp[i][j] = dp[i + 1][j - 1] + 2;
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        // 如果s[i]与s[j]不相等，
        // 如果s[i]与s[j]不相同，说明s[i]和s[j]的同时加入 并不能增加[i,j]区间回文子序列的长度，那么分别加入s[i]、s[j]看看哪一个可以组成最长的回文子序列。
        // 加入s[j]的回文子序列长度为dp[i + 1][j]。
        // 加入s[i]的回文子序列长度为dp[i][j - 1]。
        // 那么dp[i][j]一定是取最大的，即：dp[i][j] = max(dp[i + 1][j], dp[i][j - 1]);
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][len - 1]; // 返回dp[0][len - 1]，即s的最长回文子序列的长度
};
