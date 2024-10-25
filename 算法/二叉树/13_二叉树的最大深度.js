/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let max = 0; // 记录最大深度
  let queue = []; // 队列
  if (root === null) return max; // 如果根节点为空，直接返回0
  queue.push(root); // 将根节点入队

  while (queue.length) {
    // 当队列不为空时,进入循环
    max += 1; // 每进入一层，深度加1
    let length = queue.length; // 记录当前队列的长度

    for (let i = 0; i < length; i++) {
      // 遍历当前层的所有节点
      let node = queue.shift(); // 出队一个节点
      node.left && queue.push(node.left); // 如果左子节点存在，将左子节点入队
      node.right && queue.push(node.right); // 如果右子节点存在，将右子节点入队
    }
  }

  return max; // 返回最大深度
};
