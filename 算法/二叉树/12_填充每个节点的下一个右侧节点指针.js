/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  if (root === null) return null; // 如果根节点为空，直接返回
  let queue = [root]; // 初始化队列，将根节点入队

  while (queue.length) {
    // 当队列不为空时，循环执行
    let length = queue.length; // 获取当前层的节点数量

    for (let i = 0; i < length; i++) {
      // 遍历当前层的所有节点
      let node = queue.shift(); // 出队一个节点

      if (i < length - 1) {
        // 如果当前节点不是当前层的最后一个节点
        node.next = queue[0]; // 将当前节点的next指针指向下一个节点
      }

      node.left && queue.push(node.left); // 如果当前节点有左子节点，将其入队
      node.right && queue.push(node.right); // 如果当前节点有右子节点，将其入队
    }
  }
  return root; // 返回根节点
};
