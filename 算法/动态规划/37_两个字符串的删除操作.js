/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// 方法一
var minDistance = function (word1, word2) {
  const [m, n] = [word1.length, word2.length]; // 获取两个字符串的长度
  // dp[i][j]：以i-1为结尾的字符串word1，和以j-1位结尾的字符串word2，想要达到相等，所需要删除元素的最少次数
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0)); // 初始化dp数组

  // 初始化dp数组(当word2为空字符串，想要word1为空字符串时，以i-1为结尾的字符串word1要删除多少个元素，才能和word2相同，dp[i][0] = i)
  for (let i = 1; i <= m; i++) {
    dp[i][0] = i;
  }

  // 初始化dp数组(当word1为空字符串，想要word2为空字符串时，以j-1为结尾的字符串word2要删除多少个元素，才能和word1相同，dp[0][j] = j)
  for (let j = 1; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    // 遍历word1
    for (let j = 1; j <= n; j++) {
      // 遍历word2
      if (word1[i - 1] === word2[j - 1]) {
        // 如果word1[i-1]与word2[j-1]相等
        dp[i][j] = dp[i - 1][j - 1]; // 不需要删除操作，dp[i][j] = dp[i-1][j-1]
      } else {
        // 如果word1[i-1]与word2[j-1]不相等，需要进行删除操作，有三种情况：
        // 情况一：删word1[i - 1]，最少操作次数为dp[i - 1][j] + 1
        // 情况二：删word2[j - 1]，最少操作次数为dp[i][j - 1] + 1
        // 情况三：同时删word1[i - 1]和word2[j - 1]，操作的最少次数为dp[i - 1][j - 1] + 2
        // 最后当然是取最小值
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + 2
        );
      }
    }
  }
  return dp[m][n]; // 返回dp[m][n]即可，即word1和word2的最小删除次数
};

// 方法二
var minDistance = function (word1, word2) {
  const [m, n] = [word1.length, word2.length]; // 获取word1和word2的长度
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0)); // 创建二维数组dp，dp[i][j]表示长度为[0, i - 1]的字符串text1与长度为[0, j - 1]的字符串text2的最长公共子序列为dp[i][j]

  for (let i = 1; i <= m; i++) {
    // 遍历word1
    for (let j = 1; j <= n; j++) {
      // 遍历word2
      if (word1[i - 1] === word2[j - 1]) {
        // 如果word1[i-1]与word2[j-1]相等
        dp[i][j] = dp[i - 1][j - 1] + 1; // 最长公共子序列长度加1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // 否则，最长公共子序列长度为dp[i-1][j]和dp[i][j-1]中的较大值
      }
    }
  }

  return m + n - dp[m][n] * 2; // 用两个字符串的总长度减去两个最长公共子序列的长度就是删除的最少步数
};
