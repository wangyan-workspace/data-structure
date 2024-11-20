/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[0] - b[0]); // 按照左边界排序

  let result = 1; // 至少有一个箭可以射爆气球

  for (let i = 1; i < points.length; i++) {
    // 遍历数组
    if (points[i][0] > points[i - 1][1]) {
      // 如果当前气球的左边界大于前一个气球的右边界，说明不能共用一支箭
      result++; // 需要一支箭
    } else {
      points[i][1] = Math.min(points[i - 1][1], points[i][1]); // 更新右边界
    }
  }
  return result; // 返回箭的数量
};
