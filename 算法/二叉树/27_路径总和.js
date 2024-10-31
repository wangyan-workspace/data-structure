/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
// 递归法
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  const traversal = (node, cnt) => {
    // 遇到叶子节点，并且计数为0
    if (cnt === 0 && !node.left && !node.right) return true; 
    // 遇到叶子节点而没有找到合适的边(计数不为0)，直接返回
    if (!node.left && !node.right) return false; 
    //  左（空节点不遍历）.遇到叶子节点返回true，则直接返回true
    if (node.left && traversal(node.left, cnt - node.left.val)) return true; 
    //  右（空节点不遍历）.遇到叶子节点返回true，则直接返回true
    if (node.right && traversal(node.right, cnt - node.right.val)) return true;
    return false;
  };

  return traversal(root, targetSum - root.val);
};

// 迭代法
var hasPathSum = function (root, targetSum) {
  if (root === null) return false; // root为空时，pathSum必为空，直接返回false
  let nodeArr = [root]; // 存放节点的数组
  let valArr = [0]; // 存放节点对应路径的和

  while (nodeArr.length) { // 当数组中还有节点时
    let curNode = nodeArr.shift(); // 取出节点
    let curVal = valArr.shift(); // 取出节点对应的路径和
    curVal += curNode.val; // 计算新的路径和
    // 为叶子结点，且和等于目标数，返回true
    if (
      curNode.left === null && // 左节点为空
      curNode.right === null && // 右节点为空
      curVal === targetSum // 路径和等于目标值
    ) { 
      return true;
    }
    // 左节点，将当前的数值也对应记录下来
    if (curNode.left) {
      nodeArr.push(curNode.left); // 节点加入数组
      valArr.push(curVal); // 路径和加入数组
    }
    // 右节点，将当前的数值也对应记录下来
    if (curNode.right) {
      nodeArr.push(curNode.right); // 节点加入数组
      valArr.push(curVal); // 路径和加入数组
    }
  }
  return false; // 遍历完所有节点，没有符合条件的路径，返回false
};
