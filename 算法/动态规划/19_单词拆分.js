/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let dp = new Array(s.length + 1).fill(false); // dp[i] 表示 s 的前 i 个字符是否可以拆分, 即字符串长度为i的话，dp[i]为true，表示可以拆分为一个或多个在字典中出现的单词。
  dp[0] = true; // 完全就是为了推导公式

  for (let i = 0; i <= s.length; i++) {
    // 遍历字符串（遍历背包）
    for (let j = 0; j < wordDict.length; j++) {
      //遍历字典中的单词（遍历物品）
      if (i >= wordDict[j].length) {
        // 当前字符串长度大于字典中单词的长度，进入逻辑；如果当前字符串长度小于字典中的单词长度，则跳过，因为无法匹配

        // 如果确定dp[j] 是true，且 [j, i] 这个区间的子串出现在字典里，那么dp[i]一定是true。（j < i ）。
        // 所以递推公式是 if([j, i] 这个区间的子串出现在字典里 && dp[j]是true) 那么 dp[i] = true。
        if (
          s.slice(i - wordDict[j].length, i) === wordDict[j] &&
          dp[i - wordDict[j].length]
        ) {
          dp[i] = true;
        }
      }
    }
  }

  return dp[s.length]; // dp[s.length]为true，则表示字符串s可以被拆分为一个或多个在字典中出现的单词。
};
