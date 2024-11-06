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
 * @param {number} key
 * @return {TreeNode}
 */
/**
 * 有以下五种情况：
 *   第一种情况：没找到删除的节点，遍历到空节点直接返回了
 *   找到删除的节点
 *      第二种情况：左右孩子都为空（叶子节点），直接删除节点， 返回NULL为根节点
 *      第三种情况：删除节点的左孩子为空，右孩子不为空，删除节点，右孩子补位，返回右孩子为根节点
 *      第四种情况：删除节点的右孩子为空，左孩子不为空，删除节点，左孩子补位，返回左孩子为根节点
 *      第五种情况：左右孩子节点都不为空，则将删除节点的左子树头结点（左孩子）放到删除节点的右子树的最左面节点的左孩子上，返回删除节点右孩子为新的根节点。
 */
// 递归
var deleteNode = function (root, key) {
  if (root === null) return null; // 第一种情况：没找到删除的节点，遍历到空节点直接返回了

  if (key > root.val) {
    // 判断key在左子树还是右子树
    root.right = deleteNode(root.right, key); // key大于根节点，去右子树找
    return root; // 返回根节点
  } else if (key < root.val) {
    // key小于根节点，去左子树找
    root.left = deleteNode(root.left, key); // 去左子树找
    return root; // 返回根节点
  } else {
    // 找到要删除的节点
    // 场景1: 该节点是叶节点
    if (!root.left && !root.right) {
      // 左右孩子都为空（叶子节点），直接删除节点， 返回NULL为根节点
      return null;
    }
    // 场景2: 有一个孩子节点不存在
    if (root.left && !root.right) {
      // 删除节点的右孩子为空，左孩子不为空，删除节点，左孩子补位，返回左孩子为根节点
      return root.left;
    } else if (!root.left && root.right) {
      // 删除节点的左孩子为空，右孩子不为空，删除节点，右孩子补位，返回右孩子为根节点
      return root.right;
    }
    // 场景3: 左右节点都存在
    const rightNode = root.right; // 获取当前节点的右子节点
    // 获取右子树最小值节点
    const minNode = getMinNode(rightNode);
    // 将待删除节点的值替换为最小值节点值
    root.val = minNode.val;
    // 删除最小值节点
    root.right = deleteNode(root.right, minNode.val);
    return root; // 返回根节点
  }
};
// 获取右子树最小值节点
const getMinNode = (root) => {
  while (root.left) {
    root = root.left;
  }
  return root;
};
