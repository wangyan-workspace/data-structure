/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let i = 0; // name的指针
  let j = 0; // typed的指针
  const m = name.length; // name的长度
  const n = typed.length; // typed的长度

  while (i < m && j < n) {
    // 当两个指针都没有到达末尾时
    if (name[i] === typed[j]) {
      // 相同则同时向后匹配
      i++;
      j++;
    } else {
      // 不同则判断typed的指针是否在重复
      if (j === 0) return false; // 如果是第一位就不相同直接返回false
      // 判断边界为n-1,若为n会越界,例如name:"kikcxmvzi" typed:"kiikcxxmmvvzzz"
      while (j < n - 1 && typed[j] === typed[j - 1]) {
        // 如果typed的指针在重复，则继续向后匹配
        j++;
      }

      if (name[i] === typed[j]) {
        // j跨越重复项之后再次和name[i]匹配,相同则同时向后匹配
        i++;
        j++;
      } else {
        // 如果不相同则返回false
        return false;
      }
    }
  }
  // 说明name没有匹配完 例如 name:"pyplrzzzzdsfa" type:"ppyypllr"
  if (i < m) return false;

  while (j < n) {
    // typed没有匹配完,判断是否是重复项,例如 name:"alex" type:"alexxrrrrssda"
    if (typed[j] === typed[j - 1]) {
      // 是重复项则继续向后匹配
      j++;
    } else {
      // 不是重复项则返回false
      return false;
    }
  }
  return true; // 都匹配完则返回true
};
