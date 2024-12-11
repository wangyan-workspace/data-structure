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
var sumNumbers = function (root) {
  if (root === null) return 0; // 如果根节点为空，直接返回0

  let result = 0; // 存储结果
  let path = []; // 存储路径

  const listToInt = (path) => {
    // 将路径转换为数字
    let sum = 0;
    for (let num of path) {
      // 遍历路径
      sum = sum * 10 + num; // 将路径中的数字转换为拼接数字值
    }
    return sum; // 返回拼接后的数字
  };

  const recur = (root) => {
    // 递归函数
    if (root.left === null && root.right === null) {
      // 如果当前节点是叶子节点
      result += listToInt(path); // 将路径转换为数字并累加到结果中
      return; // 返回
    }

    if (root.left !== null) {
      // 如果左子节点不为空
      path.push(root.left.val); // 将左子节点的值加入路径
      recur(root.left); // 递归左子节点
      path.pop(); // 回溯，弹出路径中的最后一个值
    }

    if (root.right !== null) {
      // 如果右子节点不为空
      path.push(root.right.val); // 将右子节点的值加入路径
      recur(root.right); // 递归右子节点
      path.pop(); // 回溯，弹出路径中的最后一个值
    }
    return; // 返回
  };

  path.push(root.val); // 将根节点的值加入路径
  recur(root); // 递归根节点
  return result; // 返回结果
};
