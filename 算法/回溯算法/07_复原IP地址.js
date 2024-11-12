/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let result = []; // 存放符合条件结果的集合
  let path = []; // 存放符合条件结果

  /**
   *
   * @param {*} startIndex 开始遍历的位置
   * @returns
   */
  const backtracking = (startIndex) => {
    const len = path.length; // 当前path的长度

    if (len > 4) return; // 如果path长度大于4，则说明不符合条件
    if (len === 4 && startIndex === s.length) {
      // 如果path长度为4且遍历完了字符串，则说明符合条件
      result.push(path.join(".")); // 将path中的元素用.连接起来，存入result中
      return; // 结束本次递归
    }

    for (let i = startIndex; i < s.length; i++) {
      // 遍历字符串
      const str = s.slice(startIndex, i + 1); // 截取字符串
      if (str.length > 3 || +str > 255) break; // 如果截取的字符串长度大于3或者大于255，则不符合条件，直接break
      if (str.length > 1 && str[0] === "0") break; // 如果截取的字符串长度大于1且第一个字符为0，则不符合条件，直接break

      path.push(str); // 将截取的字符串存入path中
      backtracking(i + 1); // 递归调用，从下一个位置开始遍历
      path.pop(); // 回溯，将path中的最后一个元素弹出
    }
  };

  backtracking(0); // 从字符串的第一个位置开始遍历
  return result; // 返回符合条件的结果集合
};
