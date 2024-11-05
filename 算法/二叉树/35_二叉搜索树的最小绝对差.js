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
 * @return {number}
 */
// 递归 先转换为有序数组
var getMinimumDifference = function (root) {
  let arr = [];

  // 中序遍历
  const buildArr = (root) => {
    if (root) {
      buildArr(root.left);
      arr.push(root.val);
      buildArr(root.right);
    }
  };
  buildArr(root); // 调用中序遍历，将二叉搜索树转换为有序数组

  let diff = arr[arr.length - 1]; // 初始化最小差值为数组中最大值
  for (let i = 1; i < arr.length; i++) {
    // 遍历数组，计算相邻元素差值
    if (diff > arr[i] - arr[i - 1]) {
      // 如果当前差值小于之前的最小差值，则更新最小差值
      diff = arr[i] - arr[i - 1]; // 更新最小差值
    }
  }
  return diff; // 返回最小差值
};

// 递归 在递归的过程中更新最小值
var getMinimumDifference = function (root) {
  let res = Infinity; // 初始化最小差值为无穷大
  let preNode = null; // 初始化前一个节点为null
  // 中序遍历
  const inOrder = (node) => {
    if (!node) return;
    inOrder(node.left);
    // 更新res
    if (preNode) {
      // 如果前一个节点存在，则计算当前节点与前一个节点的差值，并更新最小差值
      res = Math.min(res, node.val - preNode.val);
    }
    // 记录前一个节点
    preNode = node;
    inOrder(node.right);
  };
  inOrder(root); // 调用中序遍历
  return res; // 返回最小差值
};

// 迭代 中序遍历
var getMinimumDifference = function (root) {
  let stack = []; // 初始化栈
  let cur = root; // 初始化当前节点为根节点
  let pre = null; // 初始化前一个节点为null
  let res = Infinity; // 初始化最小差值为无穷大

  while (cur || stack.length) {
    // 当当前节点不为空或栈不为空时，继续循环
    if (cur) {
      // 如果当前节点不为空，则将当前节点入栈，并将当前节点指向其左子节点
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop(); // 如果当前节点为空，则将栈顶元素出栈，并将当前节点指向其右子节点
      if (pre) {
        // 如果前一个节点存在，则计算当前节点与前一个节点的差值，并更新最小差值
        res = Math.min(res, cur.val - pre.val);
      }
      pre = cur; // 更新前一个节点为当前节点
      cur = cur.right; // 将当前节点指向其右子节点
    }
  }
  return res; // 返回最小差值
};
