/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]); // 按照左边界排序

  let result = 1; // 至少有一个区间不重叠

  for (let i = 1; i < intervals.length; i++) {
    // 从第二个区间开始遍历
    if (intervals[i][0] >= intervals[i - 1][1]) {
      // 如果当前区间的左边界大于等于前一个区间的右边界，则不重叠
      result++; // 不重叠的区间数加1
    } else {
      intervals[i][1] = Math.min(intervals[i - 1][1], intervals[i][1]); // 更新区间的右边界
    }
  }
  return intervals.length - result; // 总区间数减去不重叠的区间数即为需要删除的区间数
};
