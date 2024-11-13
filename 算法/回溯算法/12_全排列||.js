/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let result = []; // 存放符合条件结果的集合
  let path = []; // 存放符合条件结果
  let length = nums.length; // 数组长度

  nums.sort((a, b) => a - b); // 排序

  /**
   *
   * @param {*} used 记录路径中的元素是否使用过
   * @returns
   */
  const backtracking = (used) => {
    if (path.length === length) {
      // 如果路径长度等于数组长度，则说明已经找到了一组符合条件的结果
      result.push(Array.from(path)); // 将结果存入结果集
      return; // 结束当前递归
    }

    for (let i = 0; i < length; i++) {
      // 遍历数组
      // used[i - 1] == true，说明同⼀树⽀nums[i - 1]使⽤过
      // used[i - 1] == false，说明同⼀树层nums[i - 1]使⽤过
      // 如果同⼀树层nums[i - 1]使⽤过则直接跳过
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        // 如果当前元素与前一个元素相同，并且前一个元素没有使用过，则跳过当前元素,避免重复
        continue;
      }
      //如果同⼀树⽀nums[i]没使⽤过开始处理
      if (!used[i]) {
        // 如果当前元素没有使用过
        used[i] = true; // 标记当前元素已经使用过,标记同⼀树⽀nums[i]使⽤过，防止同一树枝重复使用
        path.push(nums[i]); // 将当前元素加入路径
        backtracking(used); // 递归调用,继续寻找下一个元素
        path.pop(); // 回溯，将当前元素从路径中移除
        used[i] = false; // 回溯，将当前元素标记为未使用
      }
    }
  };
  backtracking([]); // 调用回溯函数,传入一个空数组作为used参数
  return result; // 返回结果集
};
