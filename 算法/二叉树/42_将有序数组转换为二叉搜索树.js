/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 递归
var sortedArrayToBST = function (nums) {
  const buildTree = (Arr, left, right) => {
    if (left > right) {
      // 递归终止条件
      return null;
    }

    let mid = Math.floor(left + (right - left) / 2); // 找到中间节点

    let root = new TreeNode(Arr[mid]); // 创建根节点,用中间节点的值生成根节点
    root.left = buildTree(Arr, left, mid - 1); // 递归构建左子树
    root.right = buildTree(Arr, mid + 1, right); // 递归构建右子树
    return root; // 返回根节点
  };
  return buildTree(nums, 0, nums.length - 1); // 调用递归函数
};

// 迭代
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    //nums为空,返回null
    return null;
  }
  let root = new TreeNode(0); // 初始根节点
  let nodeQueue = [root]; // 放遍历的节点,并初始化
  let leftQueue = [0]; // 放左区间的下标,初始化
  let rightQueue = [nums.length - 1]; // 放右区间的下标

  while (nodeQueue.length) {
    // 当节点队列不为空时,继续循环
    let curNode = nodeQueue.pop(); // 取出节点
    let left = leftQueue.pop(); // 取出左区间下标
    let right = rightQueue.pop(); // 取出右区间下标
    let mid = left + Math.floor((right - left) / 2); // 找到中间节点

    curNode.val = nums[mid]; // 将下标为mid的元素给中间节点

    // 处理左区间
    if (left <= mid - 1) {
      curNode.left = new TreeNode(0); // 创建左节点
      nodeQueue.push(curNode.left); // 将左节点放入节点队列
      leftQueue.push(left); // 将左区间的下标放入左区间下标队列
      rightQueue.push(mid - 1); // 将右区间的下标放入右区间下标队列
    }

    // 处理右区间
    if (right >= mid + 1) {
      curNode.right = new TreeNode(0); // 创建右节点
      nodeQueue.push(curNode.right); // 将右节点放入节点队列
      leftQueue.push(mid + 1); // 将左区间的下标放入左区间下标队列
      rightQueue.push(right); // 将右区间的下标放入右区间下标队列
    }
  }
  return root; // 返回根节点
};
