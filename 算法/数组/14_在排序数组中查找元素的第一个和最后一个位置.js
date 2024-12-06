/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // 找到左边界(查找第一个小于target的元素下标)
  const getLeftBorder = (nums, target) => {
    let left = 0; // 左闭右闭
    let right = nums.length - 1; // 左闭右闭
    let leftBorder = -2; // 记录左边界

    while (left <= right) {
      let middle = left + ((right - left) >> 1);

      if (nums[middle] >= target) {
        // 找到第一个小于target的元素下标,即左边界
        // 左边界一定在mid左边（不含mid）
        right = middle - 1;
        leftBorder = right; // 更新左边界
      } else {
        // 左边界在mid右边（含mid）
        left = middle + 1;
      }
    }
    return leftBorder; // 返回左边界
  };
  // 找到右边界
  const getRightBorder = (nums, target) => {
    let left = 0; // 左闭右闭
    let right = nums.length - 1; // 左闭右闭
    let rightBorder = -2; // 记录右边界

    while (left <= right) {
      let middle = left + ((right - left) >> 1);

      if (nums[middle] > target) {
        // 找到第一个大于target的元素下标,即右边界
        // 右边界在mid左边（含mid）
        right = middle - 1;
      } else {
        // 右边界一定在mid右边（不含mid）
        left = middle + 1;
        rightBorder = left; // 更新右边界
      }
    }
    return rightBorder; // 返回右边界
  };

  let leftBorder = getLeftBorder(nums, target); // 找到第一个小于target的元素下标
  let rightBorder = getRightBorder(nums, target); // 找到第一个大于target的元素下标

  if (leftBorder === -2 || rightBorder === -2) return [-1, -1];
  if (rightBorder - leftBorder > 1) return [leftBorder + 1, rightBorder - 1]; // 如果target在数组中，返回target的左右边界
  return [-1, -1]; // 如果target不在数组中，返回[-1, -1]
};
