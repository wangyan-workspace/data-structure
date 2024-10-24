// 思路：层序遍历的时候，判断是否遍历到单层的最后面的元素，如果是，就放进result数组中，随后返回result就可以了

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  let res = []; // 存放结果的数组
  let queue = []; // 队列，按层级存放节点

  if (root === null) return res; // 如果根节点为空，直接返回空数组
  queue.push(root); // 将根节点放入队列中

  while (queue.length) { // 当队列不为空的时候
    // 记录每层的节点数
    let length = queue.length;

    while (length) { // 当length长度不为0的时候
      let node = queue.shift(); // 将队列中的第一个节点取出
      // 当length长度为1的时候，表示队列中只剩一个节点了，即最后一个节点
      if (length === 1) {
        res.push(node.val);
      }

      node.left && queue.push(node.left); // 如果左节点不为空，将左节点放入队列中
      node.right && queue.push(node.right); // 如果右节点不为空，将右节点放入队列中
      length--; // length长度减1
    }
  }

  return res; // 返回结果
};
