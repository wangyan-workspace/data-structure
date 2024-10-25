/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // 先定义节点交换函数
  const invertCode = function (root, left, right) {
    let temp = left;
    left = right;
    right = temp;
    root.left = left;
    root.right = right;
  };

  // 层序遍历
  let queue = [];
  if (root === null) return root;
  queue.push(root);

  while (queue.length) {
    let length = queue.length;

    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      // 节点处理翻转逻辑
      invertCode(node, node.left, node.right);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return root;
};
