/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const gasLen = gas.length; // 加油站数量
  let start = 0; // 起始加油站
  let curSum = 0; // 当前剩余油量
  let totalSum = 0; // 总油量

  for (let i = 0; i < gasLen; i++) {
    // 遍历加油站
    curSum += gas[i] - cost[i]; // 当前剩余油量
    totalSum += gas[i] - cost[i]; // 总油量

    if (curSum < 0) {
      // 如果当前剩余油量小于0，说明从当前加油站出发无法到达下一个加油站
      curSum = 0; // 重置当前剩余油量
      start = i + 1; // 更新起始加油站
    }
  }

  if (totalSum < 0) return -1; // 如果总油量小于0，说明无法完成一圈

  return start; // 返回起始加油站
};
