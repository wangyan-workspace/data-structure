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
// 递归
var insertIntoBST = function (root, val) {
  let parent = new TreeNode(0); // 父节点
  // 1. 确定递归的函数
  const preOrder = (cur, val) => {
    // 2. 确定递归终止条件
    if (cur === null) {
      // 找到插入位置
      let node = new TreeNode(val); // 创建新节点
      if (parent.val > val) {
        // 判断插入位置,小于父节点的值，插入父节点的左子节点位置
        parent.left = node; // 插入
      }
      if (parent.val < val) {
        // 大于父节点的值，插入父节点的右子节点位置
        parent.right = node; // 插入
      }
      return; // 终止递归
    }
    // 3. 确定递归单层逻辑
    parent = cur; // 记录当前节点为父节点
    if (cur.val > val) {
      // 当前节点值大于插入值，递归左子树
      preOrder(cur.left, val);
    }
    if (cur.val < val) {
      // 当前节点值小于插入值，递归右子树
      preOrder(cur.right, val);
    }
  };
  if (root === null) {
    // 如果根节点为空，直接创建新节点
    root = new TreeNode(val); // 创建新节点
  }
  preOrder(root, val); // 调用递归函数
  return root; // 返回根节点
};

// 迭代
var insertIntoBST = function (root, val) {
  if (root === null) {
    // 如果根节点为空，直接创建新节点
    root = new TreeNode(val); // 创建新节点
  } else {
    // 如果根节点不为空，开始迭代
    let parent = new TreeNode(0); // 父节点
    let cur = root; // 当前节点

    while (cur) {
      // 当当前节点不为空时，继续迭代
      parent = cur; // 记录当前节点为父节点

      if (cur.val > val) {
        // 当前节点值大于插入值，递归左子树
        cur = cur.left; // 移动到左子节点
      } else {
        cur = cur.right; // 当前节点值小于插入值，递归右子树,移动到右子节点
      }
    }
    let node = new TreeNode(val); // 创建新节点
    if (parent.val > val) {
      // 如果父节点值大于插入值，将新节点插入到父节点的左子树
      parent.left = node;
    } else {
      // 如果父节点值小于插入值，将新节点插入到父节点的右子树
      parent.right = node;
    }
  }
  return root; // 返回根节点
};
