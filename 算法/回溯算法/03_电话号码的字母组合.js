/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const k = digits.length; // 位数
  const map = [
    // 映射表
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  if (!k) return []; // 如果没有输入，则返回空数组
  if (k === 1) return map[digits].split(""); // 如果只有一个数字，则返回对应的字母数组

  let result = []; // 存放符合条件结果的集合
  let path = []; // 存放符合条件结果

  /**
   *
   * @param {*} n 输入的字符串
   * @param {*} k 字符串的长度
   * @param {*} a 开始位置
   */
  const backtracking = (n, k, a) => {
    // 回溯函数
    if (path.length === k) {
      // 如果path的长度等于k，则说明已经找到了符合条件的结果
      result.push(path.join("")); // 将path转换为字符串并添加到结果数组中
      return; // 结束本次递归
    }

    for (const v of map[n[a]]) {
      // 遍历当前数字对应的字母
      path.push(v); // 将字母添加到path中
      backtracking(n, k, a + 1); // 递归调用，继续寻找下一个数字对应的字母
      path.pop(); // 回溯，撤销处理的节点
    }
  };

  backtracking(digits, k, 0); // 调用回溯函数
  return result; // 返回结果数组
};
