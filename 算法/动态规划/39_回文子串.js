/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const len = s.length; // 字符串长度
  // 布尔类型的dp[i][j]：表示区间范围[i,j] （注意是左闭右闭）的子串是否是回文子串，如果是dp[i][j]为true，否则为false。
  let dp = new Array(len).fill().map(() => new Array(len).fill(false)); // 初始化dp数组
  let result = 0; // 记录回文子串的数量

  for (let i = len - 1; i >= 0; i--) {
    // 从下往上遍历
    for (let j = i; j < len; j++) {
      // 从左往右遍历
      if (s[i] === s[j]) {
        if (j - i <= 1) {
          // j - i <= 1 表示子串是一个长度为0或1的字符串，那么一定是回文子串
          result++;
          dp[i][j] = true;
        } else if (dp[i + 1][j - 1]) {
          // j - i > 1，表示子串长度大于1,那么判断dp[i][j]是否为回文子串，取决于dp[i + 1][j - 1]是否为回文子串
          result++;
          dp[i][j] = true;
        }
      }
    }
  }

  return result; // 返回回文子串的数量
};
