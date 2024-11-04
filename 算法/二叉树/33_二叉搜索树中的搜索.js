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
 * @param {number} val
 * @return {TreeNode}
 */
// 递归法
var searchBST = function (root, val) {
  if (!root || root.val === val) {
    // 确定终止条件, 如果root为空，或者找到这个数值了，就返回root节点。
    return root;
  }
  if (root.val > val) {
    // 如果root节点的值大于val，就递归它的左子树，否则递归右子树。
    return searchBST(root.left, val);
  }
  if (root.val < val) {
    // 如果root节点的值大于val，就递归它的左子树，否则递归右子树。
    return searchBST(root.right, val);
  }
};
// 迭代法
var searchBST = function (root, val) {
  while (root !== null) {
    // 确定循环条件, 如果root不为空，就继续循环。
    if (root.val < val) {
      // 如果root节点的值小于val
      root = root.right; // 将右子树的值赋值给root
    } else if (root.val > val) {
      // 如果root节点的值大于val
      root = root.left; // 将左子树的值赋值给root
    } else return root; // 如果root节点的值等于val，就返回root节点
  }
  return root; // 如果root为空，就返回null
};
