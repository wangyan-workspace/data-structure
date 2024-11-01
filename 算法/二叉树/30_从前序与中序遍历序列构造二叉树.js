/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  const rootVal = preorder.shift(); // 从前序遍历的数组中获取中间节点的值， 即数组第一个值
  const rootIndex = inorder.indexOf(rootVal); // 获取中间节点在中序遍历中的下标
  const root = new TreeNode(rootVal); // 创建中间节点
  // 创建左节点
  root.left = buildTree(
    preorder.slice(0, rootIndex), // 前序遍历数组中，中间节点左边的部分, 长度与中序数组的左边部分保持一致
    inorder.slice(0, rootIndex) // 中序遍历数组中，中间节点左边的部分, 即中间节点下标之前的部分
  );
  // 创建右节点
  root.right = buildTree(
    preorder.slice(rootIndex), // 前序遍历数组中，中间节点右边的部分, 长度与中序数组的右边部分保持一致
    inorder.slice(rootIndex + 1) // 中序遍历数组中，中间节点右边的部分, 即中间节点下标之后的部分
  );

  return root;
};
