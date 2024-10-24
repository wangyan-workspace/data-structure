/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = []; // 存放结果
  let queue = []; // 队列，按层级存放节点

  if (root === null) return res; // 如果根节点为空，直接返回空数组
  queue.push(root); // 将根节点入队

  while (queue.length) { // 当队列不为空时，循环执行
    let length = queue.length; // 获取当前层的节点数量
    let currentArray = []; // 存放当前层的节点值

    for (let i = 0; i < length; i++) { // 循环遍历当前层的节点
      let node = queue.shift(); // 出队一个节点
      currentArray.push(node.val); // 将节点值存入当前层的数组中

      //这里不再是 ndoe.left node.right 而是循坏node.children
      for (let item of node.children) {
        queue.push(item); // 将子节点入队
      }
    }
    res.push(currentArray); // 将当前层的节点值存入结果数组中
  }

  return res; // 返回结果数组
};
