/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const [m, n] = [word1.length, word2.length]; // 获取两个字符串的长度
  // dp[i][j] 表示以下标i-1为结尾的字符串word1，和以下标j-1为结尾的字符串word2，最近编辑距离为dp[i][j]
  let dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    // 初始化dp数组,当字符串word2为空时，word1变成word2需要的步数
    dp[i][0] = i;
  }

  for (let j = 1; j <= n; j++) {
    // 初始化dp数组,当字符串word1为空时，word1变成word2需要的步数
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    // 遍历word1
    for (let j = 1; j <= n; j++) {
      // 遍历word2
      if (word1[i - 1] === word2[j - 1]) {
        // 如果word1[i - 1] === word2[j - 1]，说明最后一个字符不用操作,dp[i][j] = dp[i - 1][j - 1]
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // 如果word1[i - 1] !== word2[j - 1]，说明最后一个字符需要操作,需要进行插入、删除、替换操作
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + 1
        );
      }
    }
  }

  return dp[m][n]; // 返回dp[m][n]即可,即word1变成word2需要的最少步数
};
