/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  //递归遍历+递归三部曲
  let res = []; // 存放结果集
  //1. 确定递归函数 函数参数
  const getPath = function (node, curPath) {
    // curPath是当前路径
    //2. 确定终止条件，到叶子节点就终止
    if (node.left === null && node.right === null) {
      // 叶子节点
      curPath += node.val; // 因为终止了，所以不用加箭头
      res.push(curPath); // 将路径加入结果集
      return; // 结束当前递归
    }
    //3. 确定单层递归逻辑
    curPath += node.val + "->"; // 当前路径
    node.left && getPath(node.left, curPath); // 递归左子树
    node.right && getPath(node.right, curPath); // 递归右子树
  };

  getPath(root, ""); // 递归遍历整个树
  return res; // 返回结果集
};
