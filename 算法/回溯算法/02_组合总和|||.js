/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
// 回溯法
var combinationSum3 = function (k, n) {
  let result = []; // 存放符合条件结果的集合
  let path = []; // 用来存放符合条件结果

  const backtracking = (_k, targetSum, sum, startIndex) => {
    // _k是题目中要求k个数的集合，targetSum是目标和，sum是当前路径中数字的和，startIndex是搜索的起始位置
    // startIndex 就是防止出现重复的组合
    if (sum > targetSum) {
      // 剪枝操作,如果当前路径中数字的和大于目标和，就直接返回
      return;
    }

    // 终止条件
    if (path.length === _k) {
      // 如果当前路径中数字的个数等于题目中要求的k个数的集合
      if (sum === targetSum) {
        // 如果当前路径中数字的和等于目标和
        result.push(path.slice()); // 把符合条件的结果放入结果集合中
      }
      // 如果总和不相等，就直接返回
      return;
    }

    // 循环当前节点，因为只使用数字1到9，所以最大是9
    // 循环本层集合元素
    // i <= _n - (_k - path.length) + 1优化剪枝：
    // 如果for循环选择的起始位置之后的元素个数 已经不足 我们需要的元素个数了，那么就没有必要搜索了。
    for (let i = startIndex; i <= 9 - (_k - path.length) + 1; i++) {
      // 处理节点
      path.push(i); // 把当前节点放入路径中
      sum += i; // 把当前节点的值加到sum中
      // 递归回调函数
      backtracking(_k, targetSum, sum, i + 1);
      // 回溯操作,撤销处理的节点
      path.pop(); // 把当前节点从路径中移除
      sum -= i; // 把当前节点的值从sum中减去
    }
  };

  backtracking(k, n, 0, 1); // 调用回溯函数
  return result; // 返回结果
};
