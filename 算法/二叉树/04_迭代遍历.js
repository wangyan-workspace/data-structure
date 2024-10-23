// 前序遍历
// 入栈 右 =》 左
// 出栈 中 =》 左 =》 右
var preorderTraversal = function (root, res = []) {
  if (!root) return res; // 递归终止条件
  const stack = [root]; // 根节点入栈
  let cur = null; // 当前节点

  while (stack.length) { // 栈不为空
    cur = stack.pop(); // 出栈
    res.push(cur.val); // 记录当前节点值
    cur.right && stack.push(cur.right); // 右节点入栈
    cur.left && stack.push(cur.left); // 左节点入栈
  }

  return res; // 返回结果
};

// 后序遍历
// 入栈 左 =》 右
// 出栈 中 =》 右 =》 左 结果翻转 左 =》 右 =》 中
var postorderTraversal = function(root, res = []) {
    if(!root) return res; // 递归终止条件

    const stack = [root]; // 根节点入栈
    let cur = null; // 当前节点

    while(stack.length) {
        cur = stack.pop(); // 出栈
        res.push(cur.val); // 记录当前节点值
        cur.left && stack.push(cur.left); // 左节点入栈
        cur.right && stack.push(cur.right); // 右节点入栈
    }

    return res.reverse(); // 结果翻转
}

// 中序遍历
// 入栈 左 =》 右
// 出栈 左 =》 中 =》 右
var inorderTraversal = function(root, res = []) {
    const stack = []; // 栈
    let cur = root; // 当前节点

    while(stack.length || cur) { // 栈不为空 || 当前节点不为空
        if(cur) { // 当前节点不为空
            stack.push(cur); // 入栈
            cur = cur.left; // 当前节点重置为左节点
        } else {
            cur = stack.pop(); // 出栈
            res.push(cur.val); // 记录当前节点值
            cur = cur.right; // 当前节点重置为右节点
        }
    }

    return res; // 返回结果
}
