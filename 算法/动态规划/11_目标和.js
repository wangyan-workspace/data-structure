/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const sum = nums.reduce((a, b) => a + b, 0); // 求和

  if (Math.abs(target) > sum) {
    // 如果target大于sum，则无解
    return 0;
  }

  if ((target + sum) % 2 === 1) {
    // 如果target + sum不是偶数，则无解
    return 0;
  }

  const halfSum = (target + sum) / 2; // 将问题转化为背包问题，求halfSum的子集个数

  let dp = new Array(halfSum + 1).fill(0); // dp[i]表示背包容量为i时，子集的个数
  dp[0] = 1; // 背包容量为0时，子集的个数为1

  for (let i = 0; i < nums.length; i++) {
    // 遍历nums数组
    for (let j = halfSum; j >= nums[i]; j--) {
      // 遍历背包容量
      dp[j] = dp[j] + dp[j - nums[i]]; // 更新dp[j]，表示背包容量为j时，子集的个数
    }
  }

  return dp[halfSum]; // 返回背包容量为halfSum时，子集的个数
};
