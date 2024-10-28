/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // 使用递归遍历左右子树 递归三部曲
  // 1. 确定递归的参数 left(第一棵树),right（第二棵树）和返回值true false
  const compareNode = function (left, right) {
    // 2. 确定终止条件 空的情况
    if (
      (left === null && right !== null) ||
      (left !== null && right === null)
    ) {
      return false;
    } else if (left === null && right === null) {
      return true;
    } else if (left.val !== right.val) {
      return false;
    }

    // 3. 确定单层递归逻辑
    let outSide = compareNode(left.left, right.left);
    let inSide = compareNode(left.right, right.right);
    return outSide && inSide;
  };
  return compareNode(p, q);
};
