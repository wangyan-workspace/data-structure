// 思路：层序遍历的时候把一层求个总和再取一个均值
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  let res = []; // 存放结果的数组
  let queue = []; // 队列，按层级存放节点

  if (root === null) return res; // 如果根节点为空，直接返回空数组
  queue.push(root); // 将根节点入队

  while (queue.length) { // 只要队列不为空，就继续循环
    let lengthLevel = queue.length; // lengthLevel记录每一层的节点个数
    let len = queue.length; // len记录每一层的节点个数
    // sum记录每一层的和;
    let sum = 0;

    while (lengthLevel) { // 只要lengthLevel不为0，就继续循环
      let node = queue.shift(); // 出队一个节点
      sum += node.val; // 将节点的值加到sum中
      // 队列存放下一层节点
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      lengthLevel--; // lengthLevel减1
    }
    res.push(sum / len); // 将每一层的平均值存入结果数组中
  }
  return res; // 返回结果数组
};
