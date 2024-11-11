/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let result = []; // 存放符合条件结果的集合
  let path = []; // 存放符合条件结果
  let len = s.length; // 字符串长度

  /**
   *
   * @param {*} startIndex 开始遍历的位置
   * @returns
   */
  const backtracking = (startIndex) => {
    if (startIndex >= len) {
      // 终止条件,当遍历到字符串末尾时终止
      result.push(Array.from(path)); // 将符合条件的结果放入结果集合中
      return; // 结束本次递归
    }

    for (let i = startIndex; i < len; i++) {
      // 从startIndex开始遍历
      if (!isPalindrome(s, startIndex, i)) continue; // 如果不是回文串,则跳过本次循环

      path.push(s.slice(startIndex, i + 1)); // 如果是回文串,则将回文串放入path中
      backtracking(i + 1); // 继续递归,从i+1开始遍历
      path.pop(); // 回溯,将path中的最后一个元素弹出
    }
  };

  backtracking(0); // 从0开始遍历
  return result; // 返回结果
};

// 判断字符串是否为回文
const isPalindrome = (s, left, right) => {
  for (let i = left, j = right; i < j; i++, j--) {
    // 从字符串两端开始遍历，如果两个字符不相等，则不是回文串
    if (s[i] !== s[j]) return false;
  }
  return true;
};
