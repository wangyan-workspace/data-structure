/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const ans = ["JFK"]; // 存放结果
  let map = {}; // 存放每个站点的终点站信息,及次数
  // 整理每个站点的终点站信息
  tickets.forEach((t) => {
    let targets = map[t[0]]; 
    if (!targets) {
      targets = { [t[1]]: 0 };
      map[t[0]] = targets;
    }
    targets[t[1]] = (targets[t[1]] || 0) + 1;
  });
  // 按照key字典序排序对象
  const sortObject = (obj) => {
    const newObj = {};
    const keys = Object.keys(obj);
    keys.sort((k1, k2) => (k1 < k2 ? -1 : 1));
    keys.forEach((key) => {
      if (obj[key] !== null && typeof obj[key] === "object") {
        newObj[key] = sortObject(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    });
    return newObj;
  };
  /**
   * 
   * @param {*} tickets  票务信息
   * @param {*} targets  当前站点的终点站信息
   * @returns 
   */
  const backtrack = (tickets, targets) => {
    if (ans.length === tickets.length + 1) { // 走完所有票,返回true
      return true;
    }
    const target = targets[ans[ans.length - 1]]; // 获取当前站点的终点站信息
    // 没有下一站
    if (!target) {
      return false;
    }
    // 或者在这里排序
    // const keyList = Object.keys(target).sort((k1, k2) => (k1 < k2 ? -1 : 1));
    const keyList = Object.keys(target); 
    for (const key of keyList) { // 遍历终点站
      // 判断当前站是否还能飞
      if (target[key] > 0) {
        target[key]--; // 飞走一张
        ans.push(key); // 添加到行程
        // 对象key有序 此时的行程就是字典序最小的 直接跳出
        if (backtrack(tickets, targets)) {
          return true;
        }
        target[key]++; // 回溯,将票加回来
        ans.pop(); // 回溯,将站点移除
      }
    }
    return false;
  };
  map = sortObject(map);
  console.log(map);
  // backtrack(tickets, map);
  return ans;
};

findItinerary([
  ["MUC", "LHR"],
  ["JFK", "MUC"],
  ["SFO", "SJC"],
  ["LHR", "SFO"],
]);
// 记录对应关系及次数：{ MUC: { LHR: 1 }, JFK: { MUC: 1 }, SFO: { SJC: 1 }, LHR: { SFO: 1 } }
// 排序处理的结果map：{ JFK: { MUC: 1 }, LHR: { SFO: 1 }, MUC: { LHR: 1 }, SFO: { SJC: 1 } }
findItinerary([
  ["JFK", "SFO"],
  ["JFK", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "JFK"],
  ["ATL", "SFO"],
]);
// 记录对应关系及次数：{ JFK: { SFO: 1, ATL: 1 }, SFO: { ATL: 1 }, ATL: { JFK: 1, SFO: 1 } }
// 排序处理的结果map：{ ATL: { JFK: 1, SFO: 1 }, JFK: { ATL: 1, SFO: 1 }, SFO: { ATL: 1 } }
findItinerary([
  ["JFK", "SFO"],
  ["ATL", "JFK"],
  ["ATL", "SFO"],
  ["JFK", "ATL"],
  ["SFO", "ATL"],
]);
// 记录对应关系及次数：{ JFK: { SFO: 1, ATL: 1 }, ATL: { JFK: 1, SFO: 1 }, SFO: { ATL: 1 } }
// 排序处理的结果map：{ ATL: { JFK: 1, SFO: 1 }, JFK: { ATL: 1, SFO: 1 }, SFO: { ATL: 1 } }

findItinerary([
  ["JFK", "SFO"],
  ["JFK", "ATL"],
  ["SFO", "JFK"],
  ["ATL", "AAA"],
  ["AAA", "BBB"],
  ["BBB", "ATL"],
  ["ATL", "AAA"],
  ["AAA", "BBB"],
  ["BBB", "ATL"],
  ["ATL", "AAA"],
  ["AAA", "BBB"],
  ["BBB", "ATL"],
  ["ATL", "AAA"],
  ["AAA", "BBB"],
  ["BBB", "ATL"],
  ["ATL", "AAA"],
  ["AAA", "BBB"],
  ["BBB", "ATL"],
  ["ATL", "AAA"],
  ["AAA", "BBB"],
  ["BBB", "ATL"],
  ["ATL", "AAA"],
  ["AAA", "BBB"],
  ["BBB", "ATL"],
  ["ATL", "AAA"],
  ["AAA", "BBB"],
  ["BBB", "ATL"],
  ["ATL", "AAA"],
  ["AAA", "BBB"],
  ["BBB", "ATL"],
  ["ATL", "AAA"],
  ["AAA", "BBB"],
  ["BBB", "ATL"],
  ["ATL", "AAA"],
  ["AAA", "BBB"],
  ["BBB", "ATL"],
  ["ATL", "AAA"],
  ["AAA", "BBB"],
  ["BBB", "ATL"],
  ["ATL", "AAA"],
  ["AAA", "BBB"],
  ["BBB", "ATL"],
  ["ATL", "AAA"],
  ["AAA", "BBB"],
  ["BBB", "ATL"],
  ["ATL", "AAA"],
  ["AAA", "BBB"],
  ["BBB", "ATL"],
  ["ATL", "AAA"],
  ["AAA", "BBB"],
  ["BBB", "ATL"],
  ["ATL", "AAA"],
  ["AAA", "BBB"],
  ["BBB", "ATL"],
  ["ATL", "AAA"],
  ["AAA", "BBB"],
  ["BBB", "ATL"],
  ["ATL", "AAA"],
  ["AAA", "BBB"],
  ["BBB", "ATL"],
  ["ATL", "AAA"],
  ["AAA", "BBB"],
  ["BBB", "ATL"],
  ["ATL", "AAA"],
  ["AAA", "BBB"],
  ["BBB", "ATL"],
  ["ATL", "AAA"],
  ["AAA", "BBB"],
  ["BBB", "ATL"],
  ["ATL", "AAA"],
  ["AAA", "BBB"],
  ["BBB", "ATL"],
  ["ATL", "AAA"],
  ["AAA", "BBB"],
  ["BBB", "ATL"],
  ["ATL", "AAA"],
  ["AAA", "BBB"],
  ["BBB", "ATL"],
  ["ATL", "AAA"],
  ["AAA", "BBB"],
  ["BBB", "ATL"],
]);
// 记录对应关系及次数：
// {
//   JFK: { SFO: 1, ATL: 1 },
//   SFO: { JFK: 1 },
//   ATL: { AAA: 26 },
//   AAA: { BBB: 26 },
//   BBB: { ATL: 26 }
// }
// 排序处理的结果map：
// {
//   AAA: { BBB: 26 },
//   ATL: { AAA: 26 },
//   BBB: { ATL: 26 },
//   JFK: { ATL: 1, SFO: 1 },
//   SFO: { JFK: 1 }
// }
