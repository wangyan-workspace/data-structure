/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // 左、根、右
  let res = []; // 存储结果

  const traverse = function (root) { // 递归函数
    if (root === null) return; // 递归终止条件

    traverse(root.left); // 递归左子树
    res.push(root.val); // 处理根节点
    traverse(root.right); // 递归右子树
  };

  traverse(root); // 调用递归函数
  return res; // 返回结果
};
