/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let dp = new Array(n + 1).fill(0); // dp[i]表示i个节点能构成二叉搜索树的个数

  // 初始化dp[0]和dp[1]
  dp[0] = 1; // 0个节点能构成二叉搜索树的个数是1
  dp[1] = 1; // 1个节点能构成二叉搜索树的个数是1

  for (let i = 2; i <= n; i++) {
    // 从2个节点开始计算
    for (let j = 1; j <= i; j++) {
      // 枚举根节点的位置
      dp[i] += dp[j - 1] * dp[i - j]; // dp[i] = dp[0] * dp[i - 1] + dp[1] * dp[i - 2] + ... + dp[i - 1] * dp[0]
    }
  }

  return dp[n]; // 返回n个节点能构成二叉搜索树的个数
};
