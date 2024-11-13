/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let result = []; // 存放符合条件结果的集合
  let path = []; // 用来存放符合条件结果
  nums.sort((a, b) => a - b); // 排序

  const backtracking = (startIndex, nums) => {
    // startIndex 记录下一层递归，搜索的起始位置
    result.push([...path]); // 收集子集，要放在终止条件的上面，否则会漏掉最后一个节点
    if (startIndex >= nums.length) {
      // 终止条件,可以不加
      return;
    }

    for (let i = startIndex; i < nums.length; i++) {
      // 从startIndex开始搜索,防止重复
      if (i > startIndex && nums[i] === nums[i - 1]) continue; // 剪枝，同一层相同元素，跳过

      path.push(nums[i]); // 处理节点
      backtracking(i + 1, nums); // 递归调用，从下一个位置开始遍历
      path.pop(); // 回溯，撤销处理的节点
    }
  };

  backtracking(0, nums); // 从第0个位置开始搜索
  return result; // 返回结果
};
