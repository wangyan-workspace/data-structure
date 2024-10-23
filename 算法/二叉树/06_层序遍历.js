/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [];
  let queue = [];

  if (root === null) return res;
  queue.push(root);

  while (queue.length) {
    // 记录当前层级节点数
    let length = queue.length;
    // 存放每一层节点
    let currentLeval = [];

    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      currentLeval.push(node.val);
      // 存放当前层下一层的节点
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    //把每一层的结果放到结果数组
    res.push(currentLeval);
  }

  return res;
};
