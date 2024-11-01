/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (!inorder.length || !postorder.length) return null;

  const rootVal = postorder.pop(); // 从后序遍历的数组中获取中间节点的值， 即数组最后一个值
  const rootIndex = inorder.indexOf(rootVal); // 获取中间节点在中序遍历中的下标
  const root = new TreeNode(rootVal); // 创建中间节点

  // 创建左节点
  root.left = buildTree(
    inorder.slice(0, rootIndex), // 中序遍历数组中，中间节点左边的部分, 即中间节点下标之前的部分
    postorder.slice(0, rootIndex) // 后序遍历数组中，中间节点左边的部分, 长度与中序数组的左边部分保持一致
  );
  // 创建右节点
  root.right = buildTree(
    inorder.slice(rootIndex + 1), // 中序遍历数组中，中间节点右边的部分, 即中间节点下标之后的部分
    postorder.slice(rootIndex) // 后序遍历数组中，中间节点右边的部分, 长度与中序数组的右边部分保持一致
  );
  return root;
};
