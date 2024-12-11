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
 * @return {TreeNode}
 */
var balanceBST = function (root) {
  let result = []; // 结果数组

  // 中序遍历转成有序数组
  const travesal = (cur) => {
    if (!cur) return; // 递归终止条件
    travesal(cur.left);
    result.push(cur.val);
    travesal(cur.right);
  };

  // 有序数组转成平衡二叉树
  const getTree = (nums, left, right) => {
    if (left > right) return null; // 递归终止条件

    let mid = left + ((right - left) >> 1); // 取中间位置
    let root = new TreeNode(nums[mid]); // 中心位置作为当前节点的值
    root.left = getTree(nums, left, mid - 1); // 递归地将区间[left,mid−1] 作为当前节点的左子树
    root.right = getTree(nums, mid + 1, right); // 递归地将区间[mid+1,right] 作为当前节点的左子树
    return root; // 返回当前节点
  };

  travesal(root);
  return getTree(result, 0, result.length - 1); // 调用有序数组转成平衡二叉树
};
