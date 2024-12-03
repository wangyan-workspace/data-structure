/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  const [m, n] = [s.length, t.length]; // m为s的长度，n为t的长度
  // 以i-1为结尾的s子序列中出现以j-1为结尾的t的个数为dp[i][j]。
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0)); // 初始化dp数组

  // 初始化dp数组
  for (let i = 0; i <= m; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i <= m; i++) {
    // 遍历s
    for (let j = 1; j <= n; j++) {
      // 遍历t
      // 当s[i - 1] 与 t[j - 1]相等时，dp[i][j]可以有两部分组成
      // 一部分是用s[i - 1]来匹配，那么个数为dp[i - 1][j - 1]。即不需要考虑当前s子串和t子串的最后一位字母，所以只需要 dp[i-1][j-1]
      // 另一部分是不用s[i - 1]来匹配，个数为dp[i - 1][j]
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      } else {
        // 当s[i - 1] 与 t[j - 1]不相等时，dp[i][j]只有一部分组成，不用s[i - 1]来匹配，即dp[i - 1][j]
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[m][n]; // 返回dp[m][n],即s[0...m-1]中t[0...n-1]的个数
};
