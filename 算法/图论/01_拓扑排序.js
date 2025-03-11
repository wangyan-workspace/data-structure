// leetcode_207 课程表
var canFinish = function (numCourses, prerequisites) {
  let graph = new Array(numCourses).fill(0).map(() => []);
  let inDegree = new Array(numCourses).fill(0);

  for (let [a, b] of prerequisites) {
    graph[a].push(b);
    inDegree[b]++;
  }

  let queue = [];

  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  let count = 0;
  while (queue.length) {
    let current = queue.shift();
    count++;
    for (let item of graph[current]) {
      inDegree[item]--;

      if (inDegree[item] === 0) {
        queue.push(item);
      }
    }
  }

  return count === numCourses;
};
