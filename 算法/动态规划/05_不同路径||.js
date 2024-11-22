/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length; // 确定行
  const n = obstacleGrid[0].length; // 确定列
  const dp = new Array(m).fill().map(() => new Array(n).fill(0)); // 初始化dp数组

  for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
    // 初始化第一列
    dp[i][0] = 1;
  }

  for (let i = 0; i < n && obstacleGrid[0][i] === 0; i++) {
    // 初始化第一行
    dp[0][i] = 1;
  }

  for (let i = 1; i < m; i++) {
    // 遍历行,从第二行开始
    for (let j = 1; j < n; j++) {
      // 遍历列,从第二列开始
      if (obstacleGrid[i][j] === 1) {
        // 如果有障碍物,则该位置无法到达,dp[i][j] = 0
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]; // 否则,该位置可以从上方或者左方到达,所以dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }

  return dp[m - 1][n - 1]; // 返回最后一个位置的结果
};
