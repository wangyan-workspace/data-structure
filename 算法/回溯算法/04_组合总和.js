/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = []; // 存放符合条件结果的集合
  let path = []; // 用来存放符合条件结果
  candidates.sort((a, b) => a - b); // 数组排序

  /**
   *
   * @param {*} startIndex 开始遍历的位置
   * @param {*} sum 当前遍历到数字的加和
   * @returns
   */
  const backtracking = (startIndex, sum) => {
    if (sum === target) {
      // 如果和等于目标值，则将当前路径添加到结果中
      result.push(Array.from(path)); // 注意这里需要拷贝一份path，否则path会随着回溯而变化
      return; // 结束当前递归
    }

    for (let i = startIndex; i < candidates.length; i++) {
      // 从startIndex开始遍历,避免重复,因为前面的已经遍历过了
      const n = candidates[i]; // 取出当前遍历的数字

      if (n > target - sum) break; // 如果当前数字大于目标值减去当前和，则说明后面的数字肯定大于目标值，直接结束循环

      path.push(n); // 将当前数字添加到路径中
      sum += n; // 更新当前和
      backtracking(i, sum); // 递归调用，从当前数字开始遍历(因为可以无限制重复被选取)
      path.pop(); // 回溯，移除当前数字
      sum -= n; // 回溯，更新当前和
    }
  };

  backtracking(0, 0); // 从0开始遍历，当前和为0
  return result; // 返回结果
};
