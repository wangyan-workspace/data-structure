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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  if (root === null) return null; // 递归终止条件

  if (root.val < low) {
    // 当前节点小于low，则递归（当前节点的）右子树
    let right = trimBST(root.right, low, high);
    return right; // 返回（当前节点递归好的）右子树
  }

  if (root.val > high) {
    // 当前节点大于high，则递归（当前节点的）左子树
    let left = trimBST(root.left, low, high);
    return left; // 返回（当前节点递归好的）左子树
  }

  root.left = trimBST(root.left, low, high); // 递归(整棵树的)左子树
  root.right = trimBST(root.right, low, high); // 递归(整棵树的)右子树
  return root; // 返回整棵树的根节点
};
