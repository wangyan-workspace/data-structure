/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0; // 如果needle为空，则返回0

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

  let next = getNext(needle); // 获取前缀表
  let j = 0; // j表示 模式串的起始位置
  for (let i = 0; i < haystack.length; i++) {
    // 遍历haystack
    while (j > 0 && haystack[i] !== needle[j]) {
      // haystack中的字母与needle中的字母不相同，j更新，向前回退
      j = next[j - 1];
    }
    if (haystack[i] === needle[j]) {
      // haystack中的字母与needle中的字母相同，j+1，继续遍历needle
      j++;
    }
    if (j === needle.length) {
      // 说明needle遍历完成，匹配成功，返回匹配的起始位置
      return i - needle.length + 1; // 返回匹配的起始位置
    }
  }

  return -1; // 匹配失败，返回-1
};
