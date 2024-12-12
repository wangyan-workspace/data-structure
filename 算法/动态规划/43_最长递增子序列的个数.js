/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  const len = nums.length; // 数组长度
  if (len <= 1) return len; // 如果数组长度小于等于1，直接返回数组长度
  let dp = new Array(len).fill(1); // i之前（包括i）最长递增子序列的长度为dp[i]
  let count = new Array(len).fill(1);  // 以nums[i]为结尾的字符串，最长递增子序列的个数为count[i]
  let result = 0; // 最终结果

  for (let i = 0; i < len; i++) { // 遍历数组
    for (let j = 0; j < i; j++) {  // 遍历数组
      if (nums[i] > nums[j]) {
        if (dp[j] + 1 > dp[i]) { // 如果在[0, i-1]的范围内，找到了j，使得dp[j] + 1 > dp[i]，说明找到了一个更长的递增子序列。
          dp[i] = dp[j] + 1; // 更新dp[i]
          count[i] = count[j]; // 那么以j为结尾的子串的最长递增子序列的个数，更新count[i]
        } else if (dp[j] + 1 === dp[i]) { // 如果在[0, i-1]的范围内，找到了j，使得dp[j] + 1 == dp[i]，说明找到了两个相同长度的递增子序列。
          count[i] += count[j]; // 那么以i为结尾的子串的最长递增子序列的个数 就应该加上以j为结尾的子串的最长递增子序列的个数。
        }
      }
    }
  }
  let max = Math.max(...dp); // 找到dp数组中的最大值
  for (let i = 0; i < len; i++) { // 遍历dp数组
    if (dp[i] === max) { // 如果dp[i]等于最大值，说明以i为结尾的子串的最长递增子序列的长度等于最大值
      result += count[i]; // 那么以i为结尾的子串的最长递增子序列的个数，就应该加到结果中
    }
  }

  return result; // 返回结果
};
