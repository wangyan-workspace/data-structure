/**
 *
 * @param {*} bagweight 背包的最大容量
 * @param {*} weight 每个物品的对应容量（大小）
 * @param {*} value 每个物品的价值
 */
// 纯二维的01背包
var backpackTwo = (bagweight, weight, value) => {
  let number = weight.length; // 物品的个数
  let dp = new Array(number).fill().map(() => new Array(bagweight + 1).fill(0)); // 初始化,dp[i][j] 表示从下标为[0-i]的物品里任意取，放进容量为j的背包，价值总和最大是多少

  //初始化,物品0放入背包中，背包容量为j（1~bagweight）所能达到的最大价值
  for (let j = weight[0]; j <= bagweight; j++) {
    dp[0][j] = value[0];
  }

  console.log("dp", dp);

  for (let i = 1; i < number; i++) {
    // 遍历物品
    for (let j = 0; j <= bagweight; j++) {
      // 遍历背包容量
      if (j < weight[i]) {
        // 背包容量小于当前物品的重量，不能放入当前物品，所以背包中物品的最大价值就是之前的价值
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]); // 背包容量大于等于当前物品的重量，可以选择放入或者不放入当前物品，放入背包中，背包中物品的最大价值就是之前的价值和当前物品的价值之和
      }
    }
  }

  return dp[number - 1][bagweight]; // 获取最后一个物品放入背包的最大价值
};

// 一维数组的01背包
var backpackOne = (bagweight, weight, value) => {
  let dp = new Array(bagweight + 1).fill(0); // 初始化,dp[j]表示容量为j的背包所背的物品的最大价值

  for (let i = 0; i < weight.length; i++) {
    // 遍历物品
    for (let j = bagweight; j >= weight[i]; j--) {
      // 遍历背包容量
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]); // 背包容量大于等于当前物品的重量，可以选择放入或者不放入当前物品，放入背包中，背包中物品的最大价值就是之前的价值和当前物品的价值之和
    }
  }

  return dp[bagweight];
};

// const value = backpackOne(4, [1, 3, 4], [15, 20, 30]);
const value = backpackTwo(1, [2,2,3,1,5,2], [2,3,1,5,4,3]);
console.log("value", value);
