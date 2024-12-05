/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 方法一：使用哈希表记录位置
var smallerNumbersThanCurrent = function (nums) {
  const len = nums.length; // 记录数组长度
  const map = new Map(); // 记录数字 nums[i] 有多少个比它小的数字
  const res = [...nums]; //深拷贝nums
  res.sort((a, b) => a - b); // 升序排列

  for (let i = 0; i < len; i++) {
    // 遍历排序后的数组，记录每个数字的位置
    if (!map.has(res[i])) {
      // 遇到了相同的数字，那么不需要更新该 number 的情况
      map.set(res[i], i); // 记录数字 res[i] 有多少个比它小的数字
    }
  }

  // 此时map里保存的每一个元素数值 对应的 小于这个数值的个数
  for (let i = 0; i < len; i++) {
    // 遍历原数组，将每个元素替换为map里对应的值
    res[i] = map.get(nums[i]);
  }

  return res; // 返回结果
};

// 方法二：不使用哈希表，只使用一个额外数组
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let array = [...nums]; // 深拷贝
  array.sort((a, b) => a - b); // 升序排列，此时数组元素下标即是比他小的元素的个数
  let res = [];

  nums.forEach((item) => res.push(array.indexOf(item))); // 即使元素重复也不怕，indexOf 只返回找到的第一个元素的下标
  return res; // 返回结果数组
};
