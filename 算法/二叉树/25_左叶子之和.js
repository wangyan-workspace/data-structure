/**
 * @param {TreeNode} root
 * @return {number}
 */
// 迭代法
var sumOfLeftLeaves = function (root) {
  if (root === null) return 0; // 终止条件
  let queue = []; // 队列
  let sum = 0; // 左叶子之和
  queue.push(root); // 根节点入队

  while (queue.length) {
    // 队列不为空,继续循环
    let node = queue.shift(); // 出队

    if (node.left && node.left.left === null && node.left.right === null) {
      // 如果该节点的左节点不为空，该节点的左节点的左节点为空，该节点的左节点的右节点为空，则找到了一个左叶子
      sum += node.left.val; // 将左叶子的值加入sum
    }

    node.left && queue.push(node.left); // 左节点入队
    node.right && queue.push(node.right); // 右节点入队
  }

  return sum; // 返回左叶子之和
};

// 递归法
var sumOfLeftLeaves = function (root) {
  if (root === null) return 0; // 终止条件

  let sum = 0; // 左叶子之和

  if (root.left && root.left.left === null && root.left.right === null) {
    // 如果该节点的左节点不为空，该节点的左节点的左节点为空，该节点的左节点的右节点为空，则找到了一个左叶子
    sum += root.left.val; // 将左叶子的值加入sum
  }

  sum += sumOfLeftLeaves(root.left); // 递归左子树
  sum += sumOfLeftLeaves(root.right); // 递归右子树

  return sum; // 返回左叶子之和
};
