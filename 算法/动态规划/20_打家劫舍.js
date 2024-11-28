/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const len = nums.length; // 数组长度
  let dp = [nums[0], Math.max(nums[0], nums[1])]; // dp数组，dp[i]表示前i个房间能偷到的最大金额

  for (let i = 2; i < len; i++) {
    // 从第3个房间开始遍历
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]); // 状态转移方程
  }

  return dp[len - 1]; // 返回dp数组最后一个元素，即前len个房间能偷到的最大金额
};
