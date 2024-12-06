/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  const len = nums.length; // 数组长度
  let result = []; // 结果数组

  let evenIndex = 0; // 偶数索引
  let oddIndex = 1; // 奇数索引
  for (let i = 0; i < len; i++) {
    // 遍历数组
    if (nums[i] % 2 === 0) {
      // 如果是偶数
      result[evenIndex] = nums[i]; // 将偶数放到偶数索引位置
      evenIndex += 2; // 偶数索引加2
    } else {
      // 如果是奇数
      result[oddIndex] = nums[i]; // 将奇数放到奇数索引位置
      oddIndex += 2; // 奇数索引加2
    }
  }

  return result; // 返回结果数组
};
