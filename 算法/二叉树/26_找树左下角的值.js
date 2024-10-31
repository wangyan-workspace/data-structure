/**
 * @param {TreeNode} root
 * @return {number}
 */
// 迭代法
var findBottomLeftValue = function (root) {
  if (root === null) return 0;
  let queue = []; // 队列
  let resNode; // 保存每一层最左边的节点
  queue.push(root); // 根节点入队

  while (queue.length) {
    let length = queue.length; // 当前层的节点个数

    for (let i = 0; i < length; i++) {
      // 遍历当前层的节点
      let node = queue.shift(); // 出队

      if (i === 0) {
        // 如果是最左边的节点
        resNode = node.val; // 保存最左边的节点值
      }

      node.left && queue.push(node.left); // 左节点入队
      node.right && queue.push(node.right); // 右节点入队
    }
  }

  return resNode; // 返回最左边的节点值
};

// 递归法
var findBottomLeftValue = function (root) {
  //递归遍历 前序遍历 找到最大深度的叶子节点即可
  let maxPath = 0; // 保存最大深度
  let resNode = null; // 保存最左边的节点值
  // 1. 确定递归函数的函数参数
  const dfsTree = (node, curPath) => {
    // curPath 当前深度, node 当前节点
    // 2. 确定递归函数终止条件
    if (node === null) return;
    // 3. 确定单层递归逻辑
    if (node.left === null && node.right === null && curPath > maxPath) {
      // 如果是叶子节点且深度大于最大深度
      maxPath = curPath; // 更新最大深度
      resNode = node.val; // 保存最左边的节点值
    }
    node.left && dfsTree(node.left, curPath + 1); // 左节点递归,深度加1
    node.right && dfsTree(node.right, curPath + 1); // 右节点递归,深度加1
  };

  dfsTree(root, 1); // 从根节点开始递归,初始深度为1
  return resNode; // 返回最左边的节点值
};
