/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let map = new Map(); // 记录每个元素出现次数

  arr.forEach((item) => {
    // 遍历数组,记录每个元素出现次数
    return map.set(item, (map.get(item) || 0) + 1);
  });
  // Set() 里的元素是不重复的。如果有元素出现次数相同，则最后的set的长度不等于map的长度
  return map.size === new Set(map.values()).size;
};
