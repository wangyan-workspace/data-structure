/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  let result = []; // 存放符合条件结果的集合
  let path = []; // 存放符合条件结果

  const backtracking = (startIndex) => {
    // startIndex 记录下一层递归，搜索的起始位置
    if (path.length >= 2) {
      // 收集结果,注意path长度大于2
      result.push([...path]);
    }
    let uset = []; // uset用来记录本层元素是否重复使用过,新的一层uset都会重新定义（清空）,所以要知道uset只负责本层！
    for (let i = startIndex; i < nums.length; i++) {
      // 从startIndex开始递归,避免重复
      if (
        (path.length > 0 && nums[i] < path[path.length - 1]) || // 排除不满足递增的情况
        uset[nums[i]] // 排除重复的情况
      ) {
        continue;
      }
      uset[nums[i]] = true; // 记录本层元素已经使用过了

      path.push(nums[i]); // 处理节点
      backtracking(i + 1); // 递归调用，从下一个位置开始遍历
      path.pop(); // 回溯，撤销处理的节点
    }
  };
  backtracking(0); // 从第0个位置开始搜索
  return result; // 返回结果
};
