/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
// 这个在leetcode上有一个测试样例会超时
var findItinerary = function (tickets) {
  let result = ["JFK"]; // 记录结果
  let map = {};  // 记录起点、终点的对应关系

  // 记录起点、终点的对应关系
  for (let ticket of tickets) {
    const [from, to] = ticket; // 起点和终点

    if (!map[from]) { // 如果起点不存在，则创建一个空数组
      map[from] = []; 
    }
    map[from].push(to); // 将终点添加到起点数组中
  }

  // 对到达城市列表排序
  for (let city in map) {
    map[city].sort();
  }

  const backtracking = () => {
    if (result.length === tickets.length + 1) { // 如果结果数组长度等于票数加1，则说明已经找到了一个完整的行程
      return true;
    }

    if (
      !map[result[result.length - 1]] || // 如果当前城市的下一个城市列表为空，则说明已经没有下一个城市了，返回false
      !map[result[result.length - 1]].length 
    ) {
      return false;
    }

    for (let i = 0; i < map[result[result.length - 1]].length; i++) { // 遍历当前城市的下一个城市列表
      let city = map[result[result.length - 1]][i]; // 获取下一个城市
      // 删除已走过航线，防止死循环
      map[result[result.length - 1]].splice(i, 1); 
      result.push(city); // 将下一个城市添加到结果数组中
      if (backtracking()) { // 如果找到了一个完整的行程，则返回true
        return true;
      }
      result.pop(); // 回溯，如果没有找到完整的行程，则将下一个城市从结果数组中删除
      map[result[result.length - 1]].splice(i, 0, city); // 回溯，将下一个城市重新添加到当前城市的下一个城市列表中
    }
  };

//   console.log(map);

  backtracking();
  return result;
};

// findItinerary([
//   ["MUC", "LHR"],
//   ["JFK", "MUC"],
//   ["SFO", "SJC"],
//   ["LHR", "SFO"],
// ]);
// 记录对应关系: { MUC: [ 'LHR' ], JFK: [ 'MUC' ], SFO: [ 'SJC' ], LHR: [ 'SFO' ] }
// 到达城市排序: { MUC: [ 'LHR' ], JFK: [ 'MUC' ], SFO: [ 'SJC' ], LHR: [ 'SFO' ] }

// findItinerary([
//   ["JFK", "SFO"],
//   ["JFK", "ATL"],
//   ["SFO", "ATL"],
//   ["ATL", "JFK"],
//   ["ATL", "SFO"],
// ]);
// 记录对应关系: { JFK: [ 'SFO', 'ATL' ], SFO: [ 'ATL' ], ATL: [ 'JFK', 'SFO' ] }
// 到达城市排序: { JFK: [ 'ATL', 'SFO' ], SFO: [ 'ATL' ], ATL: [ 'JFK', 'SFO' ] }

// findItinerary([
//   ["JFK", "SFO"],
//   ["ATL", "JFK"],
//   ["ATL", "SFO"],
//   ["JFK", "ATL"],
//   ["SFO", "ATL"],
// ]);
// 记录对应关系: { JFK: [ 'SFO', 'ATL' ], ATL: [ 'JFK', 'SFO' ], SFO: [ 'ATL' ] }
// 到达城市排序: { JFK: [ 'ATL', 'SFO' ], ATL: [ 'JFK', 'SFO' ], SFO: [ 'ATL' ] }

const result = findItinerary([
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
// 到达城市排序
// {
//   JFK: [ 'ATL', 'SFO' ],
//   SFO: [ 'JFK' ],
//   ATL: [
//     'AAA', 'AAA', 'AAA', 'AAA',
//     'AAA', 'AAA', 'AAA', 'AAA',
//     'AAA', 'AAA', 'AAA', 'AAA',
//     'AAA', 'AAA', 'AAA', 'AAA',
//     'AAA', 'AAA', 'AAA', 'AAA',
//     'AAA', 'AAA', 'AAA', 'AAA',
//     'AAA', 'AAA'
//   ],
//   AAA: [
//     'BBB', 'BBB', 'BBB', 'BBB',
//     'BBB', 'BBB', 'BBB', 'BBB',
//     'BBB', 'BBB', 'BBB', 'BBB',
//     'BBB', 'BBB', 'BBB', 'BBB',
//     'BBB', 'BBB', 'BBB', 'BBB',
//     'BBB', 'BBB', 'BBB', 'BBB',
//     'BBB', 'BBB'
//   ],
//   BBB: [
//     'ATL', 'ATL', 'ATL', 'ATL',
//     'ATL', 'ATL', 'ATL', 'ATL',
//     'ATL', 'ATL', 'ATL', 'ATL',
//     'ATL', 'ATL', 'ATL', 'ATL',
//     'ATL', 'ATL', 'ATL', 'ATL',
//     'ATL', 'ATL', 'ATL', 'ATL',
//     'ATL', 'ATL'
//   ]
// }
console.log(result);
