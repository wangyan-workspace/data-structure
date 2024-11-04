/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
// 递归法
var mergeTrees = function (root1, root2) {
  const preOrder = (root1, root2) => {
    if (root1 === null) return root2; // 如果root1为空，则返回root2
    if (root2 === null) return root1; // 如果root2为空，则返回root1
    root1.val += root2.val; // 将root1和root2的值相加
    root1.left = preOrder(root1.left, root2.left); // 递归合并左子树
    root1.right = preOrder(root1.right, root2.right); // 递归合并右子树
    return root1; // 返回合并后的根节点
  };
  return preOrder(root1, root2); // 调用递归函数
};

// 迭代法
var mergeTrees = function (root1, root2) {
  if (root1 === null) return root2; // 如果root1为空，则返回root2
  if (root2 === null) return root1; // 如果root2为空，则返回root1

  let queue = []; // 创建一个队列
  queue.push(root1); // 将root1入队
  queue.push(root2); // 将root2入队

  while (queue.length) {
    // 当队列不为空时，循环执行以下操作
    let node1 = queue.shift(); // 从队列中取出一个节点(对应当前位置root1中的节点)
    let node2 = queue.shift(); // 从队列中取出一个节点(对应当前位置root2中的节点)
    node1.val += node2.val; // 将node1和node2的值相加

    if (node1.left !== null && node2.left !== null) {
      // 如果node1和node2的左子节点都不为空
      queue.push(node1.left); // 将node1的左子节点入队
      queue.push(node2.left); // 将node2的左子节点入队
    }
    if (node1.right !== null && node2.right !== null) {
      // 如果node1和node2的右子节点都不为空
      queue.push(node1.right); // 将node1的右子节点入队
      queue.push(node2.right); // 将node2的右子节点入队
    }
    if (node1.left === null && node2.left !== null) {
      // 如果node1的左子节点为空，而node2的左子节点不为空
      node1.left = node2.left; // 将node2的左子节点赋值给node1的左子节点
    }
    if (node1.right === null && node2.right !== null) {
      // 如果node1的右子节点为空，而node2的右子节点不为空
      node1.right = node2.right; // 将node2的右子节点赋值给node1的右子节点
    }
  }

  return root1; // 返回合并后的二叉树
};
