/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let dp = new Array(nums.length).fill(1); // dp[i]表示以nums[i]结尾的最长上升子序列的长度
  let result = 1; // 最长上升子序列的长度

  for (let i = 1; i < nums.length; i++) {
    // 遍历数组
    for (let j = 0; j < i; j++) {
      // 遍历数组的前i个元素
      if (nums[i] > nums[j]) {
        // 如果nums[i]大于nums[j]
        dp[i] = Math.max(dp[i], dp[j] + 1); // 更新dp[i]的值
      }
    }

    result = Math.max(result, dp[i]); // 更新最长上升子序列的长度
  }
  return result; // 返回最长上升子序列的长度
};
