/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let result = []; // 存放符合条件结果的集合
  let path = []; // 存放符合条件结果
  candidates.sort((a, b) => a - b); // 排序

   /**
   *
   * @param {*} startIndex 开始遍历的位置
   * @param {*} sum 当前遍历到数字的加和
   * @returns
   */
  const backtracking = (startIndex, sum) => { 
    if (sum === target) { // 如果和等于目标值，则将当前路径添加到结果中
      result.push(Array.from(path)); // 注意这里需要拷贝一份path，否则path在回溯过程中会被修改
      return; // 结束当前递归
    }

    for (let i = startIndex; i < candidates.length; i++) { // 从startIndex开始遍历,防止重复
      let n = candidates[i]; // 当前遍历的数字

      if (i > startIndex && candidates[i] === candidates[i - 1]) { 
        //若当前元素和前一个元素相等
        //则本次循环结束，防止出现重复组合
        continue;
      }
      //如果当前元素值大于目标值-总和的值
      //由于数组已排序，那么该元素之后的元素必定不满足条件
      //直接终止当前层的递归
      if (n > target - sum) break;

      path.push(n); // 将当前元素添加到路径中
      sum += n; // 更新总和
      backtracking(i + 1, sum); // 递归调用,从下一个元素开始遍历
      path.pop(); // 回溯,移除当前数字
      sum -= n; // 回溯,更新当前和
    }
  };

  backtracking(0, 0); // 从第0个元素开始遍历，初始和为0
  return result; // 返回结果
};
