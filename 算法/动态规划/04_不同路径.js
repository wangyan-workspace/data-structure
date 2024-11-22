/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = new Array(m).fill().map(() => new Array(n)); // 初始化二维数组
  console.log(dp); // [ [ <7 empty items> ], [ <7 empty items> ], [ <7 empty items> ] ]

  for (let i = 0; i < m; i++) {
    // 初始化第一列
    dp[i][0] = 1;
  }

  for (let i = 0; i < n; i++) {
    // 初始化第一行
    dp[0][i] = 1;
  }
  // dp[i][j] 表示到达（i，j） 点的路径数
  for (let i = 1; i < m; i++) {
    // 从第二行开始
    for (let j = 1; j < n; j++) {
      // 从第二列开始
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]; // 当前格子的路径数等于上面格子的路径数加上左边格子的路径数
    }
  }

  return dp[m - 1][n - 1]; // 返回右下角的路径数
};
uniquePaths(3, 7);
