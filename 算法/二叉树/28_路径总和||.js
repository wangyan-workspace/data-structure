/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
// 迭代法
var pathSum = function (root, targetSum) {
  if (root === null) return []; // 空树返回空数组
  let nodeArr = [root]; // 记录遍历节点
  let countArr = [0]; // 对应路径和
  let pathArr = [[]]; // 对应路径
  let resArr = []; // 记录符合目标和的返回路径

  while (nodeArr.length) {
    let curNode = nodeArr.shift(); // 当前节点
    let curVal = countArr.shift(); // 当前路径和
    let curPath = pathArr.shift(); // 当前路径
    curVal += curNode.val; // 更新当前路径和
    curPath.push(curNode.val); // 更新当前路径

    if (
      // 当前节点为叶子节点且路径和等于目标和
      curNode.left === null &&
      curNode.right === null &&
      curVal === targetSum
    ) {
      resArr.push(curPath); // 记录路径
    }

    if (curNode.left) {
      // 当前节点有左子节点,记录信息，继续遍历
      nodeArr.push(curNode.left); // 记录左子节点
      countArr.push(curVal); // 记录遍历到左子节点路径和
      pathArr.push([...curPath]); // 记录遍历到左子节点路径
    }

    if (curNode.right) {
      // 当前节点有右子节点，记录信息，继续遍历
      nodeArr.push(curNode.right); // 记录右子节点
      countArr.push(curVal); // 记录遍历到右子节点路径和
      pathArr.push([...curPath]); // 记录遍历到右子节点路径
    }
  }

  return resArr; // 返回符合目标和的路径
};
