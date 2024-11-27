/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  let dp = new Array(target + 1).fill(0); // dp[i]表示和为i的方案数
  dp[0] = 1; // 初始化，和为0的方案数为1

  for (let i = 0; i <= target; i++) { // 遍历目标总和（背包）
    for (let j = 0; j < nums.length; j++) { // 遍历数组（物品）
      if (i >= nums[j]) { // 如果背包容量大于等于物品重量
        dp[i] += dp[i - nums[j]]; // 方案数累加
      }
    }
  }

  return dp[target]; // 返回和为target的方案数
};
