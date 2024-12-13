/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    // 交换数组,确保nums1长度小于nums2
    const temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }

  const nums1Set = new Set(nums1); // 将nums1转为set
  const resSet = new Set(); // 存放结果

  for (let i = nums2.length - 1; i >= 0; i--) {
    // 从后往前遍历nums2
    if (nums1Set.has(nums2[i])) {
      // 如果nums2的元素在nums1中存在,则存入结果
      resSet.add(nums2[i]);
    }
  }

  return Array.from(resSet); // 将结果转为数组
};
