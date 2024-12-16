/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let twoSumMap = new Map(); // 存储nums1和nums2中两数之和出现的次数
  let count = 0; // 记录满足条件的四数之和的个数

  for (let n1 of nums1) {
    // 遍历nums1
    for (let n2 of nums2) {
      // 遍历nums2
      let sum = n1 + n2; // 计算nums1和nums2中两数之和
      twoSumMap.set(sum, (twoSumMap.get(sum) || 0) + 1); // 将两数之和及其出现次数存入map中
    }
  }

  for (let n3 of nums3) {
    // 遍历nums3
    for (let n4 of nums4) {
      // 遍历nums4
      let sum = n3 + n4; // 计算nums3和nums4中两数之和
      count += twoSumMap.get(0 - sum) || 0; // 如果存在两数之和为0 - sum的，则将对应的次数累加到count中
    }
  }

  return count; // 返回满足条件的四数之和的个数
};
