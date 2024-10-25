/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  let depth = 0; // 记录最小深度
  let queue = []; // 队列，按层次遍历
  if (root === null) return depth; // 如果根节点为空，则最小深度为0
  queue.push(root); // 将根节点加入队列

  while (queue.length) {
    // 队列不为空，则继续遍历
    depth++; // 每遍历一层，深度加1
    let length = queue.length; // 记录当前层的节点数

    for (let i = 0; i < length; i++) {
      // 遍历当前层的所有节点
      let node = queue.shift(); // 取出队列中的第一个节点

      // 如果左右节点都是null(在遇见的第一个leaf节点上)，则该节点深度最小
      if (node.left === null && node.right === null) {
        return depth; // 返回最小深度
      }

      node.left && queue.push(node.left); // 如果左节点不为空，则将左节点加入队列
      node.right && queue.push(node.right); // 如果右节点不为空，则将右节点加入队列
    }
  }
};
