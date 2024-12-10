/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  if (s.length === 0) return false; // 空字符串

  // 生成前缀表
  const getNext = (needle) => {
    let next = []; // 前缀表
    let j = 0; //j表示 最长相等前后缀长度
    next.push(j); // next[i]是i（包括i）之前的最长相等前后缀长度

    for (let i = 1; i < needle.length; i++) {
      // 遍历needle
      while (j > 0 && needle[i] !== needle[j]) {
        // 前后缀不相同，j更新，向前回退
        j = next[j - 1];
      }
      if (needle[i] === needle[j]) {
        // 前后缀相同，j+1
        j++;
      }
      next.push(j); // 更新前缀表
    }

    return next; // 返回前缀表
  };

  let next = getNext(s); // 获取前缀表

  // s.length - next[next.length - 1]是最长相等前后缀不包含的子串的长度
  // s.length % (s.length - next[next.length - 1]) === 0,则说明数组的长度正好可以被 最长相等前后缀不包含的子串的长度 整除 ，说明该字符串有重复的子字符串。
  if (
    next[next.length - 1] !== 0 &&
    s.length % (s.length - next[next.length - 1]) === 0
  ) {
    return true; // 有重复的子字符串
  }
  return false; // 无重复的子字符串
};
