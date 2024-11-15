/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g = g.sort((a, b) => a - b); // 对孩子的胃口进行排序
  s = s.sort((a, b) => a - b); // 对饼干的尺寸进行排序
  let result = 0; // 记录满足的孩子数量
  let index = s.length - 1; // 记录当前饼干的位置

  for (let i = g.length - 1; i >= 0; i--) {
    // 从胃口最大的孩子开始遍历
    if (index >= 0 && s[index] >= g[i]) {
      // 如果当前饼干可以满足当前孩子的胃口
      result++; // 满足的孩子数量加1
      index--; // 饼干位置向前移动
    }
  }
  return result; // 返回满足的孩子数量
};
