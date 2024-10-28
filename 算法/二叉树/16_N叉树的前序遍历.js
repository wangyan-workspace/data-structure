/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  // 递归
  let res = []; // 存放结果
  if (root === null) return res; // 递归终止条件
  res.push(root.val); // 根节点入栈
  if (root.children) {
    // 如果根节点有子节点
    root.children.forEach((item) => {
      // 遍历子节点
      res = [...res, ...preorder(item)]; // 递归调用
    });
  }
  return res; // 返回结果
};

// 迭代（借用栈，后进先出）
var preorder = function (root) {
  let res = []; // 存放结果
  let stack = []; // 栈
  if (root === null) return res; // 终止条件
  stack.push(root); // 根节点入栈

  while (stack.length) {
    // 栈不为空
    let node = stack.pop(); // 出栈
    res.push(node.val); // 根节点入栈
    if (node.children) {
      // 如果根节点有子节点
      node.children.reverse().forEach((item) => {
        // 栈是后进先出，因此要翻转一下node.children
        stack.push(item);
      });
    }
  }

  return res; // 返回结果
};
