/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  let res = []; // 存放结果

  const traverse = (root) => {
    if (root === null) return; // 终止条件

    for (let child of root.children) {
      // 遍历子节点
      traverse(child); // 递归
    }

    res.push(root.val); // 根节点入栈
  };

  traverse(root); // 调用递归函数
  return res; // 返回结果
};
