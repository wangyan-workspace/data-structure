/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  function reverse(nums, i, j) {
    // 翻转数组
    while (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // 交换
      i++;
      j--;
    }
  }

  const len = nums.length; // 数组长度
  k %= len; // 如果k大于数组长度，则取余

  if (k) {
    reverse(nums, 0, len - 1); // 先翻转整个数组
    reverse(nums, 0, k - 1); // 再翻转前k个
    reverse(nums, k, len - 1); // 最后翻转区间为k到末尾的数组
  }
};
