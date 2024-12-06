/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0; // 左指针
  let right = nums.length - 1; // 右指针

  while (left <= right) {
    // 当左指针小于等于右指针时，继续循环
    let middle = left + ((right - left) >> 1); // 计算中间位置

    if (target > nums[middle]) {
      // 如果目标值大于中间位置的值
      left = middle + 1; // 左指针移动到中间位置的右边
    } else if (target < nums[middle]) {
      // 如果目标值小于中间位置的值
      right = middle - 1; // 右指针移动到中间位置的左边
    } else {
      return middle; // 如果目标值等于中间位置的值，返回中间位置
    }
  }

  // 分别处理如下四种情况
  // 目标值在数组所有元素之前  [0, -1], return  right + 1
  // 目标值等于数组中某一个元素  return middle;
  // 目标值插入数组中的位置 [left, right]，return  right + 1
  // 目标值在数组所有元素之后的情况 [left, right]， 因为是右闭区间，所以 return right + 1
  return right + 1;
};
