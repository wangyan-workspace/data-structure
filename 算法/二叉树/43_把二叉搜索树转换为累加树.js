/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 反中序遍历这个二叉树，然后顺序累加就可以了
// 递归
var convertBST = function (root) {
  let pre = 0; // 记录前一个节点的值

  const ReverseInOrder = (cur) => {
    if (cur) { // cur不为空
      ReverseInOrder(cur.right); // 先遍历右子树
      cur.val += pre; // 当前节点值加上前一个节点的值(处理根节点)
      pre = cur.val; // 更新前一个节点的值(处理根节点)
      ReverseInOrder(cur.left); // 再遍历左子树
    }
  };

  ReverseInOrder(root); // 调用函数
  return root; // 返回根节点
};

// 迭代
var convertBST = function (root) {
  let pre = 0; // 记录前一个节点的值
  let cur = root; // 当前节点
  let stack = []; // 栈

  while (cur !== null || stack.length) { // 当前节点不为空或者栈不为空
    while (cur !== null) { // 当前节点不为空
      stack.push(cur); // 当前节点入栈
      cur = cur.right; // 当前节点指向右子树(右孩子节点)
    }

    cur = stack.pop(); // 当前节点出栈
    cur.val += pre; // 当前节点值加上前一个节点的值(处理根节点)
    pre = cur.val; // 更新前一个节点的值(处理根节点)

    cur = cur.left; // 当前节点指向左子树(左孩子节点)
  }
  return root; // 返回根节点
};
