/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = []; // 存放符合条件结果的集合
  let path = []; // 用来存放符合条件结果

  const backtracking = (startIndex) => {
    // startIndex用来记录下一层递归，搜索的起始位置
    result.push([...path]); // 收集子集
    if (startIndex >= nums.length) {
      // 终止条件可以不加
      return;
    }

    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i]); // 处理节点
      backtracking(i + 1); // 递归调用，从下一个位置开始遍历
      path.pop(); // 回溯，撤销处理的节点
    }
  };

  backtracking(0); // 从数组的第一个位置开始遍历
  return result; // 所有可能的结果
};
