/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => Math.abs(b) - Math.abs(a)); // 先将数组按绝对值大小(降序)排序

  for (let i = 0; i < nums.length; i++) {
    // 遍历数组，将负数变为正数，同时K--
    if (nums[i] < 0 && k > 0) {
      nums[i] = -nums[i];
      k--;
    }
  }

  while (k > 0) {
    // 如果K还大于0，那么反复转变数值最小的元素，将K用完
    nums[nums.length - 1] = -nums[nums.length - 1];
    k--;
  }
  // 使用箭头函数的隐式返回值时，需使用简写省略花括号，否则要在 a + b 前加上 retur
  return nums.reduce((a, b) => a + b); // 求和
};
