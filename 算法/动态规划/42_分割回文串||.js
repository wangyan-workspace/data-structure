/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  const len = s.length; // 字符串长度
  // 二维数组isPalindromic来保存整个字符串的回文情况
  //// 布尔类型的isPalindromic[i][j]：表示区间范围[i,j] （注意是左闭右闭）的子串是否是回文子串，如果是isPalindromic[i][j]为true，否则为false。
  let isPalindromic = new Array(len)
    .fill()
    .map(() => new Array(len).fill(false));

  for (let i = len - 1; i >= 0; i--) {
    // 从下往上遍历
    for (let j = i; j < len; j++) {
      // 从左往右遍历
      // j - i <= 1 表示子串是一个长度为0或1的字符串，那么一定是回文子串
      // j - i > 1，表示子串长度大于1,那么判断dp[i][j]是否为回文子串，取决于dp[i + 1][j - 1]是否为回文子串
      if (s[i] === s[j] && (j - i <= 1 || isPalindromic[i + 1][j - 1])) {
        isPalindromic[i][j] = true;
      }
    }
  }

  // dp[i]：范围是[0, i]的回文子串，最少分割次数是dp[i]
  let dp = new Array(len).fill(0);
  // 初始化 dp[i]的最大值其实就是i，也就是把每个字符分割出来
  for (let i = 0; i < len; i++) {
    dp[i] = i;
  }

  for (let i = 1; i < len; i++) {
    if (isPalindromic[0][i]) { // 判断是不是回文子串
      dp[i] = 0; // 是回文子串，不需要分割
      continue; // 继续下一次循环
    }

    for (let j = 0; j < i; j++) { // 遍历子串
      if (isPalindromic[j + 1][i]) { // 判断是不是回文子串
        dp[i] = Math.min(dp[i], dp[j] + 1); // 更新dp[i]的值
      }
    }
  }
  return dp[len - 1]; // 返回dp[len - 1]的值,也就是最少分割次数
};
