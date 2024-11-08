/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// 回溯法
var combine = function (n, k) {
  let result = []; // 存放符合条件结果的集合
  let path = []; // 用来存放符合条件结果

  let backtracking = (_n, _k, startIndex) => { // startIndex 就是防止出现重复的组合
    // 终止条件
    if (path.length === _k) { // 如果path的长度等于k，说明我们找到了一组符合条件的结果
      result.push(path.slice()); // 因为path是引用类型，所以我们需要拷贝一份path，不然最后result中的结果都是空的
      return; // 结束本次递归
    }
    // 循环本层集合元素
    // i <= _n - (_k - path.length) + 1优化剪枝：
    // 如果for循环选择的起始位置之后的元素个数 已经不足 我们需要的元素个数了，那么就没有必要搜索了。
    for (let i = startIndex; i <= _n - (_k - path.length) + 1; i++) {
      path.push(i); // 处理节点

      // 递归
      backtracking(_n, _k, i + 1); 

      // 回溯操作
      path.pop(); // 撤销处理的节点
    }
  };
  backtracking(n, k, 1); // 从1开始
  return result; // 返回结果
};
