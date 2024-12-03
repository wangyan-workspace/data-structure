/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 本题说是求绘制的最大连线数，其实就是求两个字符串的最长公共子序列的长度！
var maxUncrossedLines = function (nums1, nums2) {
  const [m, n] = [nums1.length, nums2.length]; // 获取 nums1 和 nums2 的长度
  // 状态：dp[i][j] 表示 nums1[0...i-1] 和 nums2[0...j-1] 的最长公共子序列的长度
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0)); // 初始化 dp 数组

  for (let i = 1; i <= m; i++) {
    // 遍历 nums1
    for (let j = 1; j <= n; j++) {
      // 遍历 nums2
      if (nums1[i - 1] === nums2[j - 1]) {
        // 如果 nums1[i-1] 和 nums2[j-1] 相等，则 dp[i][j] = dp[i-1][j-1] + 1
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // 如果 nums1[i-1] 和 nums2[j-1] 不相等，则 dp[i][j] = max(dp[i-1][j], dp[i][j-1])
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n]; // 返回 dp[m][n]，即 nums1 和 nums2 的最长公共子序列的长度
};
