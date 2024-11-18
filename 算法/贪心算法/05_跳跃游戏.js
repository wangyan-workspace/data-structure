/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length === 1) return true; // 如果只有一个元素，则一定可以跳到

  let cover = 0; // 当前覆盖最远距离下标

  for (let i = 0; i <= cover; i++) {
    // 遍历覆盖最远距离下标内的所有元素
    cover = Math.max(cover, i + nums[i]); // 更新覆盖最远距离下标,取当前覆盖最远距离下标和当前下标+当前下标对应数值的最大值
    if (cover >= nums.length - 1) return true; // 如果覆盖最远距离下标大于等于数组长度-1，则说明可以跳到最后一个元素
  }
  return false; // 如果遍历完所有元素，覆盖最远距离下标仍然小于数组长度-1，则说明无法跳到最后一个元素
};
