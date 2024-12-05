/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  const len = arr.length; // 数组长度
  if (len < 3) return false; // 一定不是山脉数组
  let left = 0; // 左指针
  let right = arr.length - 1; // 右指针

  // 注意防止越界
  while (left < len && arr[left] < arr[left + 1]) {
    // 从左往右遍历，如果当前元素小于下一个元素，则继续
    left++;
  }

  while (right > 0 && arr[right - 1] > arr[right]) {
    // 从右往左遍历，如果当前元素大于前一个元素，则继续
    right--;
  }
  // 如果left或者right都在起始位置，说明不是山峰
  if (left === right && left !== 0 && right !== len - 1) {
    // 如果left和right相等，且都不在起始位置，说明是山峰
    return true;
  }

  return false; // 其余情况不是山峰
};
