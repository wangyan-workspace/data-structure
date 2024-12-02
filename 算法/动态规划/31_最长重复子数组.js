/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  const [m, n] = [nums1.length, nums2.length]; // 获取两个数组的长度
  // dp[i][j]表示nums1[0...i-1]和nums2[0...j-1]的最长公共后缀子数组长度
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0)); // 初始化dp数组
  let res = 0; // 记录最长重复子数组长度，初始化最大长度为0

  for (let i = 1; i <= m; i++) {
    // 遍历nums1
    for (let j = 1; j <= n; j++) {
      // 遍历nums2
      if (nums1[i - 1] === nums2[j - 1]) {
        // 如果nums1[i-1]和nums2[j-1]相等
        dp[i][j] = dp[i - 1][j - 1] + 1; // 则dp[i][j]等于dp[i-1][j-1]+1
      }

      res = Math.max(res, dp[i][j]); // 更新最长重复子数组长度
    }
  }

  return res; // 返回最长重复子数组长度
};
