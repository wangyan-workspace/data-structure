/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((a, b) => a + b, 0); // 求和
  if (sum & 1) return false; // 如果和为奇数，则不可能平分,直接返回false
  const dp = new Array(sum / 2 + 1).fill(0); // 创建dp数组，长度为sum/2+1，初始值为0

  for (let i = 0; i < nums.length; i++) {
    // 遍历nums数组(物品)
    for (let j = sum / 2; j >= nums[i]; j--) {
      // 遍历（背包容量）
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]); // 背包容量大于等于当前物品的重量，可以选择放入或者不放入当前物品，放入背包中，背包中物品的最大价值就是之前的价值和当前物品的价值之和
      if (dp[j] === sum / 2) {
        // 如果背包中的物品价值等于sum/2，则说明可以平分，直接返回true
        return true;
      }
    }
  }

  return dp[sum / 2] === sum / 2; // 最后判断dp[sum/2]是否等于sum/2，如果等于，则说明可以平分，返回true，否则返回false
};
