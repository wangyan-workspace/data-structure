/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let result = -Infinity; // 初始化最大子序和为最小值
  let count = 0; // 初始化当前子序和为0

  for (let i = 0; i < nums.length; i++) {
    // 遍历数组
    count += nums[i]; // 将当前元素加入当前子序和
    if (count > result) {
      // 如果当前子序和大于最大子序和，则更新最大子序和
      result = count;
    }

    if (count < 0) {
      // 如果当前子序和小于0，则重置当前子序和为0
      count = 0;
    }
  }
  return result; // 返回最大子序和
};
