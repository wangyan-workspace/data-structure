/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let arr = new Map(); // 1. 创建一个哈希表

  for (let i = 0; i < nums.length; i++) {
    // 2. 遍历数组,将值和索引存入哈希表中
    if (arr.get(target - nums[i]) !== undefined) {
      // 3. 判断哈希表中是否存在对应的值
      return [i, arr.get(target - nums[i])]; // 4. 如果存在,则返回对应的索引
    }
    arr.set(nums[i], i); // 5. 如果不存在,则将值和索引存入哈希表中
  }

  return []; // 6. 如果遍历完数组都没有找到对应的值,则返回空数组
};
