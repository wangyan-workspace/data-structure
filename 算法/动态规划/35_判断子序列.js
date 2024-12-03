/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const [m, n] = [s.length, t.length]; // 获取字符串的长度
  // dp[i][j] 表示 s[0..i-1] 和 t[0..j-1] 的最长公共子序列长度
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0)); // 初始化二维数组

  for (let i = 1; i <= m; i++) {
    // 遍历字符串 s
    for (let j = 1; j <= n; j++) {
      // 遍历字符串 t
      if (s[i - 1] === t[j - 1]) {
        // 如果 s[i-1] 和 t[j-1] 相等,t中找到了一个字符在s中也出现了,最长公共子序列长度加1
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = dp[i][j - 1]; // 如果 s[i-1] 和 t[j-1] 不相等,最长公共子序列长度不变
      }
    }
  }

  return dp[m][n] === m; // 如果最长公共子序列长度等于 s 的长度,说明 s 是 t 的子序列
};
