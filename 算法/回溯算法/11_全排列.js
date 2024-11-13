/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = []; // 存放符合条件结果的集合
  let path = []; // 存放符合条件结果
  let length = nums.length; // 数组长度

  /**
   * 
   * @param {*} used 记录此时path里都有哪些元素使用了，一个排列里一个元素只能使用一次
   * @returns 
   */
  const backtracking = (used) => { 
    if (path.length === length) { // 如果path的长度等于nums的长度，说明找到了一个全排列
      result.push([...path]); // 将path里的元素放入result里
      return; // 结束当前递归
    }

    for (let i = 0; i < length; i++) { // 遍历nums
      if (used[i]) continue; // 如果当前元素已经使用过，跳过本次循环

      used[i] = true; // 标记当前元素已经使用过（同支）
      path.push(nums[i]); // 将当前元素放入path里
      backtracking(used); // 递归调用backtracking函数，继续寻找下一个元素
      path.pop(); // 回溯，将path里的最后一个元素弹出
      used[i] = false; // 将used[i]标记为false，表示当前元素未使用过
    }
  };
  backtracking([]); // 调用backtracking函数，传入一个空数组作为used参数
  return result; // 返回结果
};
