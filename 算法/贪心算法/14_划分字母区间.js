/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let hash = {}; // 记录每个字母最后出现的位置

  for (let i = 0; i < s.length; i++) {
    // 遍历字符串，记录每个字母最后出现的位置
    hash[s[i]] = i;
  }

  let result = []; // 记录结果
  let left = 0; // 记录每个子串的起始位置
  let right = 0; // 记录每个子串的结束位置

  for (let i = 0; i < s.length; i++) {
    // 遍历字符串，找到每个子串的结束位置
    right = Math.max(right, hash[s[i]]); // 更新当前子串的结束位置

    if (right === i) {
      // 如果当前子串的结束位置等于当前字符的位置，说明找到了一个子串
      result.push(right - left + 1); // 将子串的长度加入结果数组
      left = i + 1; // 更新下一个子串的起始位置
    }
  }

  return result; // 返回结果数组
};
partitionLabels("ababcbacadefegdehijhklij");
// 处理后的字母最远边界位置
// {
//     a: 8,
//     b: 5,
//     c: 7,
//     d: 14,
//     e: 15,
//     f: 11,
//     g: 13,
//     h: 19,
//     i: 22,
//     j: 23,
//     k: 20,
//     l: 21
// }
