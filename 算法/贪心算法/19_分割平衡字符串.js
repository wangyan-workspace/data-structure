/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let result = 0; // result为平衡字符串数量
  let total = 0; // total为当前"R"字符和"L"字符的数量差

  for (let c of s) {
    // 遍历字符串每个字符
    // 因为开始字符数量差就是0，遍历的时候要先改变数量差，否则会影响结果数量
    // 遇到"R",total++;遇到"L",total--
    total += c === "R" ? 1 : -1;
    if (total === 0) {
      //只要"R""L"数量一样就可以算是一个平衡字符串
      result++;
    }
  }

  return result; // 返回平衡字符串数量
};
