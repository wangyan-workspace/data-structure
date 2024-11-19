/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  let queue = []; // 创建一个空队列

  people.sort((a, b) => {
    // 按照身高降序排列，如果身高相同则按照前面的人数升序排列
    if (b[0] !== a[0]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  });

  for (let i = 0; i < people.length; i++) {
    // 遍历排序后的数组，将每个人插入到队列中
    // 插入位置为前面人数的位置
    // 如果前面人数为0，则插入到队列的开头
    queue.splice(people[i][1], 0, people[i]); // splice() 方法向/从数组中添加/删除项目，然后返回被修改的数组。
  }
  return queue;
};

reconstructQueue([
  [7, 0],
  [4, 4],
  [7, 1],
  [5, 0],
  [6, 1],
  [5, 2],
]);
// 排序后：[ [ 7, 0 ], [ 7, 1 ], [ 6, 1 ], [ 5, 0 ], [ 5, 2 ], [ 4, 4 ] ]

// 'people[i][1]指的是，k位置的数字
// people[i][1] 0
// people[i][1] 1
// people[i][1] 1
// people[i][1] 0
// people[i][1] 2
// people[i][1] 4

// 插入后： [ [ 5, 0 ], [ 7, 0 ], [ 5, 2 ], [ 6, 1 ], [ 4, 4 ], [ 7, 1 ] ]
