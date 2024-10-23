// 前序遍历：中左右
// 压栈顺序：右左中
var preorderTraversal = function (root, res = []) {
  const stack = [];
  if (root) stack.push(root);

  while (stack.length) {
    const node = stack.pop();
    if (!node) {
      res.push(stack.pop().val);
      continue;
    }
    if (node.right) {
      // 右
      stack.push(node.right);
    }
    if (node.left) {
      // 左
      stack.push(node.left);
    }
    stack.push(node); // 中
    stack.push(null);
  }

  return res;
};

//  中序遍历：左中右
//  压栈顺序：右中左
var inorderTraversal = function (root, res = []) {
  const stack = [];
  if (root) stack.push(root);

  while (stack.length) {
    const node = stack.pop();
    if (!node) {
      res.push(stack.pop().val);
      continue;
    }
    if (node.right) {
      // 右
      stack.push(node.right);
    }
    stack.push(node); // 中
    stack.push(null);
    if (node.left) {
      // 左
      stack.push(node.left);
    }
  }

  return res;
};

// 后续遍历：左右中
// 压栈顺序：中右左
var postorderTraversal = function (root, res = []) {
  const stack = [];
  if (root) stack.push(root);

  while (stack.length) {
    const node = stack.pop();
    if (!node) {
      res.push(stack.pop().val);
      continue;
    }
    stack.push(node); // 中
    stack.push(null);
    if (node.right) {
      // 右
      stack.push(node.right);
    }
    if (node.left) {
      // 左
      stack.push(node.left);
    }
  }

  return res;
};
