/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) return 0; // 如果根节点为空，直接返回0
  let maxCount = 0; // 记录最大深度
  let queue = []; // 队列
  queue.push(root); // 将根节点入队

  while (queue.length) {
    // 当队列不为空时,进入循环
    maxCount++; // 每进入一层，深度加1
    let length = queue.length; // 记录当前队列的长度

    for (let i = 0; i < length; i++) {
      // 遍历当前层的所有节点
      let node = queue.shift(); // 出队一个节点
      for (let child of node.children) {
        // 循环当前节点的孩子节点
        child && queue.push(child); // 如果孩子节点存在，将孩子节点入队
      }
    }
  }

  return maxCount; // 返回最大深度
};
