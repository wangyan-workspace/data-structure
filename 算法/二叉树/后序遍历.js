/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  // 左、右、根
  let res = []; // 存放结果

  const traverse = function (root) { // 递归函数
    if(root === null) return; // 如果为空，则返回
    
    traverse(root.left); // 递归左子树
    traverse(root.right); // 递归右子树
    res.push(root.val); // 将根节点放入结果数组
  };

  traverse(root); // 调用递归函数
  return res; // 返回结果
};
