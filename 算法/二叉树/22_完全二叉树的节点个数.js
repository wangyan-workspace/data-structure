/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  // 层序遍历
  let queue = []; // 队列
  if (root === null) return 0; // 如果根节点为空，则返回0
  queue.push(root); // 将根节点入队
  let nodeNums = 0; // 记录节点个数

  while (queue.length) {
    // 当队列不为空时，循环执行
    let length = queue.length; // 获取当前队列的长度

    for (let i = 0; i < length; i++) {
      // 循环遍历当前队列中的所有节点
      let node = queue.shift(); // 出队一个节点
      nodeNums++; // 节点个数加1
      node.left && queue.push(node.left); // 如果左子节点存在，则将左子节点入队
      node.right && queue.push(node.right); // 如果右子节点存在，则将右子节点入队
    }
  }
  return nodeNums; // 返回节点个数
};

var countNodes = function (root) {
  // 利用完全二叉树的特点
  if (root === null) return 0; // 如果根节点为空，则返回0

  let left = root.left; // 左子树
  let right = root.right; // 右子树
  let leftDepth = 0; // 左子树深度
  let rightDepth = 0; // 右子树深度

  while (left) {
    // 计算左子树深度
    left = left.left; // 左子树的左子树
    leftDepth++; // 左子树深度加1
  }
  while (right) {
    // 计算右子树深度
    right = right.right; // 右子树的右子树
    rightDepth++; // 右子树深度加1
  }
  if (leftDepth === rightDepth) {
    // 如果左子树深度等于右子树深度，则说明是完全二叉树
    return Math.pow(2, leftDepth + 1) - 1; // 返回节点个数(直接用 2^树深度 - 1 来计算)
  }
  return countNodes(root.left) + countNodes(root.right) + 1; // 否则，递归计算左子树和右子树的节点个数，并加上根节点
};
