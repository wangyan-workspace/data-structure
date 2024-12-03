/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const len = nums.length; // 数组长度，dp初始化
  let dp = new Array(len).fill(0); // dp[i]表示以nums[i]结尾的最大子序和
  dp[0] = nums[0]; // 初始化dp[0]

  for (let i = 1; i < len; i++) {
    // 遍历数组，更新dp[i]
    // dp[i]只有两个方向可以推出来：
    // dp[i - 1] + nums[i]，即：nums[i]加入当前连续子序列和
    // nums[i]，即：从头开始计算当前连续子序列和
    // 一定是取最大的，所以dp[i] = max(dp[i - 1] + nums[i], nums[i]);
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }

  return Math.max(...dp); // 返回dp数组中的最大值，即为最大子序和
};
