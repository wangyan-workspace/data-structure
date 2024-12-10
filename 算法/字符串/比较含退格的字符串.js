/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//双栈精简
var backspaceCompare = function (s, t) {
  const getString = (str) => {
    // 获取最终字符串
    let arr = [];

    for (let s of str) {
      // 遍历字符串
      s === "#" ? arr.pop() : arr.push(s); // 如果是#，则删除最后一个元素，否则添加到数组中
    }
    return arr.join(""); // 将数组转换为字符串并返回
  };

  return getString(s) === getString(t); // 比较两个字符串是否相等
};

//双指针
var backspaceCompare = function (s, t) {
  let sSkipNum = 0; // 记录s的#数量
  let tSkipNum = 0; // 记录t的#数量
  let i = s.length - 1; // s的指针,从后往前遍历
  let j = t.length - 1; // t的指针,从后往前遍历

  while (true) {
    while (i >= 0) {
      // 从后往前遍历s
      if (s[i] === "#") {
        // 如果当前字符是#，则sSkipNum加1
        sSkipNum++;
      } else {
        // 如果当前字符不是#，且sSkipNum大于0，则sSkipNum减1，否则跳出循环
        if (sSkipNum > 0) {
          sSkipNum--;
        } else {
          break;
        }
      }
      i--; // 指针向前移动
    }

    while (j >= 0) {
      // 从后往前遍历t
      if (t[j] === "#") {
        // 如果当前字符是#，则tSkipNum加1
        tSkipNum++;
      } else {
        // 如果当前字符不是#，且tSkipNum大于0，则tSkipNum减1，否则跳出循环
        if (tSkipNum > 0) {
          tSkipNum--;
        } else {
          break;
        }
      }
      j--; // 指针向前移动
    }
    // 后半部分#消除完了，接下来比较s[i] != t[j]
    if (i < 0 || j < 0) break; // 如果s或t已经遍历完，跳出循环
    if (s[i] !== t[j]) return false; // 如果s[i] != t[j]，返回false
    i--; // 指针向前移动
    j--; // 指针向前移动
  }

  // 说明s和t同时遍历完毕
  if (i === -1 && j === -1) {
    return true;
  }
  // (如果有一个指针（i或者j）先走到的字符串头部位置，也返回false。因为另一个字符串还有剩余字符，说明两个字符串不相等。)
  return false; // 说明s和t没有同时遍历完毕，返回false
};
