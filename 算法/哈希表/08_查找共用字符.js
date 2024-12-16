/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let result = []; // 保存结果
  const size = 26; // 字母表大小
  let firstHash = new Array(26).fill(0); // 保存第一个字符串中每个字母出现的次数
  let firstWord = words[0]; // 保存第一个字符串
  const base = "a".charCodeAt(); // 字母表基准值

  for (let i = 0; i < firstWord.length; i++) {
    // 遍历第一个字符串，统计每个字母出现的次数
    let index = firstWord[i].charCodeAt() - base; // 计算字母在字母表中的位置
    firstHash[index]++; // 统计第一个字符串中字母出现的次数
  }

  let otherHash = new Array(size).fill(0); // 保存其他字符串中每个字母出现的次数
  for (let i = 1; i < words.length; i++) {
    // 遍历其他字符串
    // 遍历当前字符串并统计其字母出现的次数，与第一个字符串比较，取最小值，之后清空otherHash中的值，以便统计下一个字符串的字母出现次数
    for (let j = 0; j < words[i].length; j++) {
      // 遍历每个字符串中的每个字母
      let index = words[i][j].charCodeAt() - base; // 计算字母在字母表中的位置
      otherHash[index]++; // 统计其他字符串中字母出现的次数
    }

    for (let i = 0; i < size; i++) {
      // 遍历字母表
      firstHash[i] = Math.min(firstHash[i], otherHash[i]); // 取两个字符串中字母出现次数的最小值
    }
    otherHash.fill(0); // 清空其他字符串的字母统计
  }

  for (let i = 0; i < size; i++) {
    // 遍历字母表
    while (firstHash[i] > 0) {
      // 如果字母出现的次数大于0
      result.push(String.fromCharCode(i + base)); // 将字母添加到结果中
      firstHash[i]--; // 减少字母出现的次数
    }
  }

  return result; // 返回结果
};
