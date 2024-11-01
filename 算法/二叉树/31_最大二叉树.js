/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  // 左闭右开区间[begin, end)
  const buildTree = (arr, begin, end) => {
    if (begin === end) return null; // 递归终止条件
    let maxValue = arr[begin]; // 当前区间的最大值
    let maxIndex = begin; // 当前区间的最大值的索引

    // 找到最大值以及对应索引
    for (let i = begin + 1; i < end; i++) {
      // 遍历当前区间
      if (arr[i] > maxValue) {
        // 如果当前值大于最大值
        maxValue = arr[i]; // 更新最大值
        maxIndex = i; // 更新最大值的索引
      }
    }

    const rootNode = new TreeNode(maxValue); // 构造根节点
    rootNode.left = buildTree(arr, begin, maxIndex); // 构造左子树
    rootNode.right = buildTree(arr, maxIndex + 1, end); // 构造右子树
    return rootNode; // 返回根节点
  };

  return buildTree(nums, 0, nums.length); // 构造最大二叉树
};
