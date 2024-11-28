/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length; // 数组长度
  if (n === 0) {
    // 长度为0，返回0
    return 0;
  }
  if (n === 1) {
    // 长度为1，返回第一个元素
    return nums[0];
  }

  const result1 = robRange(nums, 0, n - 2); // 求得0到n-2的能够偷窃到的最高金额
  const result2 = robRange(nums, 1, n - 1); // 求得1到n-1的能够偷窃到的最高金额
  return Math.max(result1, result2); // 返回两者中的最大值
};

const robRange = (nums, start, end) => {
  // 求得start到end的能够偷窃到的最高金额
  if (start === end) {
    // 如果start等于end，说明只有一个元素，直接返回该元素
    return nums[start];
  }

  const dp = new Array(nums.length).fill(0); // 创建一个数组dp，用来存储从start到end的能够偷窃到的最高金额
  dp[start] = nums[start]; // 初始化dp[start]为nums[start]
  dp[start + 1] = Math.max(nums[start], nums[start + 1]); // 初始化dp[start+1]为nums[start]和nums[start+1]中的最大值

  // 从start+2开始，计算dp[i]的值
  for (let i = start + 2; i <= end; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]); // dp[i]为dp[i-2]+nums[i]和dp[i-1]中的最大值
  }

  return dp[end]; // 返回dp[end]，即从start到end的能够偷窃到的最高金额
};
