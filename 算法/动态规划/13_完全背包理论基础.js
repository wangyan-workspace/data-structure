// 二维
var backpackTwo = () => {
  let weight = [1, 3, 5]; // 重量
  let value = [15, 20, 30]; // 价值
  let bagWeight = 4; // 背包容量
  let dp = new Array(weight.length + 1)
    .fill()
    .map(() => new Array(bagWeight + 1).fill(0)); // 初始化dp数组

  // dp[i][j]:从前i个物品中选择放入容量为j的背包中得到的最大价值
  // 注意这种定义，第i件物品的重量为weight[i-1],价值为value[i-1]
  // dp[i][j] = max(dp[i-1][j], dp[i-1][j-weight[i-1]] + value[i-1])
  // 初始化
  // 当j=0时，背包容量为0，最大价值为0；当i=0时，也就是前0件物品，也就是没有物品，最大价值也是0

  for (let i = 1; i <= weight.length; i++) {
    // 遍历物品
    for (let j = 1; j <= bagWeight; j++) {
      // 遍历背包容量
      // 如果当前背包容量放不下第i件物品，那么前i件物品放入背包得到的最大价值就是前i-1件物品放入获得的最大价值
      if (j < weight[i - 1]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        // 如果能放下，从放和不放两种选择里取最大值，这里要注意，其实完全背包二维数组的代码跟一维只有下面一个下标不同，那就是“放i”这个选择，因为是可以重复放的，所以是dp[i]
        dp[i][j] = Math.max(
          dp[i - 1][j],
          dp[i][j - weight[i - 1]] + value[i - 1]
        );
      }
    }
  }

  console.log("backpackTwo", dp, dp[weight.length][bagWeight]);
};

// 一维
// 先遍历物品，再遍历背包容量
var backpackOne1 = () => {
  let weight = [1, 3, 5]; // 重量
  let value = [15, 20, 30]; // 价值
  let bagWeight = 4; // 背包容量
  let dp = new Array(bagWeight + 1).fill(0); // 初始化dp数组

  for (let i = 0; i < weight.length; i++) {
    // 遍历物品
    for (let j = weight[i]; j <= bagWeight; j++) {
      // 遍历背包容量
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]); // 动态规划公式
    }
  }

  console.log("1", dp);
};

// 先遍历背包容量，再遍历物品
var backpackOne2 = () => {
  let weight = [1, 3, 5]; // 重量
  let value = [15, 20, 30]; // 价值
  let bagWeight = 4; // 背包容量
  let dp = new Array(bagWeight + 1).fill(0); // 初始化dp数组

  for (let j = 0; j <= bagWeight; j++) {
    // 遍历背包容量
    for (let i = 0; i < weight.length; i++) {
      // 遍历物品
      if (j >= weight[i]) {
        // 如果背包容量大于等于物品重量，那么就可以放这个物品
        dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]); // 动态规划公式
      }
    }
  }

  console.log("2", dp);
};

// backpackOne1();
// backpackOne2();
backpackTwo();

// 完全背包和 0-1 背包二维dp数组的代码只有一个下标不同

// 两个 for 循环的遍历顺序是可以颠倒的，这跟递归的本质和递推的方向有关系。
// dp[i][j] = max(dp[i - 1][j], dp[i][j - weight[i-1]] + value[i-1])；
// 递归公式中可以看出 dp[i][j] 是靠dp[i-1][j]和 dp[i][j - weight[i-1]] 推导出来的，
// 他们俩都在dp[i][j]的左上角方向（包括正左和正上两个方向），分析先遍历物品和先遍历背包的过程，
// 在计算dp[i][j]之前都已经得到了，不影响公式的推导

// 完全背包和 0-1 背包在能够放下物品 i 时的状态转移公式存在区别

// 0-1 背包
dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - weight[i - 1]] + value[i - 1]);

// 完全背包
dp[i][j] = max(dp[i - 1][j], dp[i][j - weight[i - 1]] + value[i - 1]);
// 完全背包由于物品可以重复选取，因此是 dp[i][j-weight[i-1]]
