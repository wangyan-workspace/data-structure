/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 辅助数组解决
var isValidBST = function (root) {
  let arr = []; // 构建数组

  const buildArr = (root) => {
    // 中序遍历
    if (root) {
      // 递归终止条件
      buildArr(root.left); // 递归左子树
      arr.push(root.val); // 加入当前节点
      buildArr(root.right); // 递归右子树
    }
  };
  buildArr(root); // 递归构建数组
  for (let i = 0; i < arr.length; i++) {
    // 遍历数组
    if (arr[i] <= arr[i - 1]) {
      // 判断是否为升序
      return false; // 不是升序，返回false
    }
  }
  return true; // 是升序，返回true
};

// 递归中解决
var isValidBST = function (root) {
  let pre = null; // 初始化前一个节点

  const inOrder = (root) => {
    // 中序遍历
    if (root === null) return true; // 递归终止条件

    let left = inOrder(root.left); // 递归左子树

    if (pre !== null && pre.val >= root.val) {
      // 判断是否为升序
      return false; // 不是升序，返回false
    }

    pre = root; // 更新前一个节点

    let right = inOrder(root.right); // 递归右子树

    return left && right; // 返回左右子树是否为升序
  };
  return inOrder(root); // 返回中序遍历结果
};

// 迭代法
var isValidBST = function (root) {
  const queue = []; // 构建队列
  let cur = root; // 初始化当前节点
  let pre = null; // 初始化前一个节点

  while (cur !== null || queue.length) {
    // 循环条件
    if (cur !== null) {
      // 当前节点不为空
      queue.push(cur); // 将当前节点加入队列
      cur = cur.left; // 当前节点指向左子树
    } else {
      cur = queue.pop(); // 弹出队列中的节点
      if (pre !== null && pre.val >= cur.val) {
        // 判断是否为升序
        return false; // 不是升序，返回false
      }
      pre = cur; // 更新前一个节点
      cur = cur.right; // 当前节点指向右子树
    }
  }
  return true; // 是升序，返回true
};
