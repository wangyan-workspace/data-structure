/**
 * @param {number[]} ratings
 * @return {number}
 */
// 采用了两次贪心的策略
var candy = function (ratings) {
  let candys = new Array(ratings.length).fill(1); // 每个孩子至少有一个糖果

  // 一次是从左到右遍历，只比较右边孩子评分比左边大的情况
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      // 如果右边孩子评分比左边孩子高，则右边孩子的糖果数必须比左边孩子的糖果数多
      candys[i] = candys[i - 1] + 1;
    }
  }
  // 一次是从右到左遍历，只比较左边孩子评分比右边大的情况
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      // 如果左边孩子评分比右边孩子高，则左边孩子的糖果数必须比右边孩子的糖果数多
      candys[i] = Math.max(candys[i], candys[i + 1] + 1);
    }
  }

  let count = candys.reduce((a, b) => a + b); // 计算糖果总数

  return count; // 返回糖果总数
};
