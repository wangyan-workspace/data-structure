/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let dp = new Array(nums.length).fill(1); // dp[i]表示以nums[i]结尾的最长连续递增序列的长度

  for (let i = 1; i < nums.length; i++) {
    // 从第二个元素开始遍历
    if (nums[i] > nums[i - 1]) {
      // 如果当前元素大于前一个元素，则当前元素可以接在前一个元素后面，形成更长的连续递增序列
      dp[i] = dp[i - 1] + 1; // 更新dp[i]为前一个元素的最长连续递增序列长度加1
    }
  }

  return Math.max(...dp); // 返回dp数组中的最大值，即为最长连续递增序列的长度
};
