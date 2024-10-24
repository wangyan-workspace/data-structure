/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  let res = []; // 存放结果
  let queue = []; // 存放每一层的节点

  if (root === null) return res; // 如果根节点为空，直接返回空数组
  queue.push(root); // 将根节点放入队列

  while (queue.length) {
    // 当队列不为空时,执行循环
    let length = queue.length; // 获取当前队列的长度
    let maxNumber = -Infinity; // 初始化最大值为负无穷

    for (let i = 0; i < length; i++) {
      // 遍历当前层的节点
      let node = queue.shift(); // 从队列中取出一个节点
      maxNumber = Math.max(maxNumber, node.val); // 更新最大值
      // 找到下一层的节点
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(maxNumber); // 将当前层的最大值放入结果数组中
  }

  return res; // 返回结果数组
};
