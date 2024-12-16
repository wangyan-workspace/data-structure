/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let len = s.length; // 获取字符串长度
  if (len === 0) return true; // 如果字符串长度为0，则返回true
  let maps = new Map(); // 创建一个Map对象，用于存储s字符串中每个字符对应的t字符串中的字符
  let mapt = new Map(); // 创建一个Map对象，用于存储t字符串中每个字符对应的s字符串中的字符

  for (let i = 0, j = 0; i < len; i++, j++) {
    // 遍历s字符串和t字符串
    if (!maps.has(s[i])) {
      // 如果s字符串中的字符s[i]不在maps中,maps保存 s[i] 到 t[j]的映射
      maps.set(s[i], t[j]);
    }

    if (!mapt.has(t[j])) {
      // 如果t字符串中的字符t[j]不在mapt中,mapt保存 t[j] 到 s[i]的映射
      mapt.set(t[j], s[i]);
    }
    // 如果s[i]对应的t[j]和t[j]对应的s[i]不相等，即无法映射，则返回false
    if (maps.get(s[i]) !== t[j] || mapt.get(t[j]) !== s[i]) {
      return false;
    }
  }
  // 遍历完s和t后，如果所有字符都能映射，则返回true
  return true;
};
