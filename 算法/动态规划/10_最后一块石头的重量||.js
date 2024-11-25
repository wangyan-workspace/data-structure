/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    let sum = stones.reduce((a,b) => a + b, 0); // 求和
    let dpLen = Math.floor(sum / 2); // 总和取一半（向下取整）,因为要使差值最小,所以取一半
    let dp = new Array(dpLen + 1).fill(0); // dp数组初始化

    for(let i = 0; i < stones.length; i++) { // 遍历石头
        for(let j = dpLen; j >= stones[i]; j--) { // 遍历（背包容量）
            dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]); // 背包容量大于等于当前物品的重量，可以选择放入或者不放入当前物品，放入背包中，背包中物品的最大价值就是之前的价值和当前物品的价值之和
        }
    }

    return sum - dp[dpLen] - dp[dpLen]; // dp[dpLen]是背包中物品的最大价值，总和减去背包中物品的最大价值，剩下的就是最后一块石头的重量，由于dp[dpLen]是基于总和的一半计算的，所以最后一块石头的重量需要减去dp[dpLen]的两倍
};