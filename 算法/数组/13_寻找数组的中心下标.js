/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sum = nums.reduce((a, b) => a + b, 0); //求和
  // 中心索引左半和 中心索引右半和
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < nums.length; i++) {
    // 遍历数组
    leftSum += nums[i]; // 每次循环，左半和都加上当前值
    rightSum = sum - leftSum + nums[i]; // 右半和等于总和减去左半和，再加上当前值(leftSum 里面已经有 nums[i]，多减了一次，所以加上)
    if (leftSum === rightSum) return i; // 如果左右和相等，返回当前索引
  }
  return -1; // 如果没有找到，返回-1
};
