/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false; // 长度不等，直接返回false

  let charCount = new Map(); // 创建一个哈希表，用于存储每个字符出现的次数

  for (let item of s) {
    // 遍历s字符串，将每个字符出现的次数存储到哈希表中
    charCount.set(item, (charCount.get(item) || 0) + 1);
  }

  for (let item of t) {
    // 遍历t字符串，将每个字符出现的次数从哈希表中减去
    if (!charCount.get(item)) return false; // 如果哈希表中没有该字符，说明t字符串中出现了s字符串中没有的字符，直接返回false
    charCount.set(item, (charCount.get(item) || 0) - 1); // 将该字符出现的次数减1
  }

  return true; // 遍历完t字符串后，如果哈希表中的所有字符出现的次数都为0，说明s字符串和t字符串是字母异位词，返回true
};
