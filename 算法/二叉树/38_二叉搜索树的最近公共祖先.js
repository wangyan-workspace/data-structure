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
// 递归法
var lowestCommonAncestor = function (root, p, q) {
  if (root === null) return root; // 如果根节点为空，则返回null

  if (root.val > p.val && root.val > q.val) {
    // 如果p和q的值都小于根节点的值，则说明p和q都在左子树中
    return (root.left = lowestCommonAncestor(root.left, p, q)); // 递归调用左子树
  }
  if (root.val < p.val && root.val < q.val) {
    // 如果p和q的值都大于根节点的值，则说明p和q都在右子树中
    return (root.right = lowestCommonAncestor(root.right, p, q)); // 递归调用右子树
  }
  return root; // 如果p和q分别位于根节点的两侧，则根节点就是最近公共祖先
};

// 迭代法
var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    // 当根节点不为空时，继续循环
    if (root.val > p.val && root.val > q.val) {
      // 如果p和q的值都小于根节点的值，则说明p和q都在左子树中
      root = root.left; // 将根节点指向左子树
    } else if (root.val < p.val && root.val < q.val) {
      // 如果p和q的值都大于根节点的值，则说明p和q都在右子树中
      root = root.right; // 将根节点指向右子树
    } else {
      return root; // 如果p和q分别位于根节点的两侧，则根节点就是最近公共祖先
    }
  }
  return null; // 如果根节点为空，则返回null
};
