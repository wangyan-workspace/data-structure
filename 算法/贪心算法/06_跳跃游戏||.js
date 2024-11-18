/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let curIndex = 0; // 当前覆盖的最远下标
  let nextIndex = 0; // 下一步覆盖的最远下标
  let step = 0; // 记录步数

  for (let i = 0; i < nums.length - 1; i++) {
    // 遍历数组，注意这里i < nums.length - 1，因为当i走到最后一个元素时，不需要再跳跃了
    nextIndex = Math.max(nums[i] + i, nextIndex); // 更新下一步覆盖的最远下标

    if (i === curIndex) {
      // 如果当前下标等于覆盖的最远下标，说明需要再跳一步
      curIndex = nextIndex; // 更新当前覆盖的最远下标
      step++; // 更新步数
    }
  }

  return step; // 返回步数
};
