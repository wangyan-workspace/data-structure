/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  if (nums.length <= 1) return nums.length; // 如果数组长度小于等于1，直接返回数组长度

  let result = 1; // 初始化结果为1，因为至少有一个元素
  let preDiff = 0; // 初始化前一个差值为0
  let curDiff = 0; // 初始化当前差值为0

  for (let i = 0; i < nums.length; i++) {
    curDiff = nums[i + 1] - nums[i]; // 计算当前差值
    if ((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
      // 如果当前差值与前一个差值异号，则结果加1
      result++;
      preDiff = curDiff; // 更新前一个差值为当前差值
    }
  }
  return result; // 返回结果
};
