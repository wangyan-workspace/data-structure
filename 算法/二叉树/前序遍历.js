/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  // 根 、左 、右
  let res = []; // 定义一个数组来存储结果

  const traverse = function (root) { // 定义一个递归函数
    if (root === null) return; // 如果当前节点为空，则返回

    res.push(root.val); // 将当前节点的值存入结果数组
    traverse(root.left); // 递归遍历左子树
    traverse(root.right); // 递归遍历右子树
  };

  traverse(root); // 调用递归函数
  return res; // 返回结果数组
};
