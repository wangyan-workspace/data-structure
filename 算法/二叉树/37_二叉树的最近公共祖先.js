/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 使用递归的方法
  // 需要从下到上，所以使用后序遍历
  // 1. 确定递归的函数
  const travelTree = (root, p, q) => {
    // 2. 确定递归终止条件
    if (root === null || root === p || root === q) {
      return root;
    }
    // 3. 确定递归单层逻辑
    let left = travelTree(root.left, p, q); // 递归左子树
    let right = travelTree(root.right, p, q); // 递归右子树
    if (left !== null && right !== null) { // 左右子树的回溯后的值都不为空，说明此时的root就是最近公共祖先
      return root;
    }
    if (left === null) { // 左子树为空，说明左子树没有p和q，则返回右子树的最近公共祖先
      return right;
    }
    return left; // 右子树为空，说明右子树没有p和q，则返回左子树的最近公共祖先
  };
  return travelTree(root, p, q); // 调用递归函数
};
