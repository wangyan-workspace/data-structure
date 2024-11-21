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
var minCameraCover = function (root) {
  let result = 0;
  /**
    节点的状态值：
      0 表示无覆盖,只能依靠父节点放相机
      1 表示 有摄像头,相机放在自身节点上
      2 表示有覆盖,但相机不是放在自身节点上
    后序遍历，根据左右节点的情况,来判读 自己的状态
  */
  const traversal = (cur) => {
    // 空节点默认为 有覆盖状态，避免在叶子节点上放摄像头
    if (cur === null) {
      return 2;
    }

    let left = traversal(cur.left);
    let right = traversal(cur.right);

    // 情况1:如果左右节点都覆盖了的话, 那么本节点的状态就应该是无覆盖,没有摄像头
    if (left === 2 && right === 2) {
      return 0;
    }

    // 情况2：左右节点至少有一个无覆盖的情况,中间节点此时应该放一个摄像头
    // 如果是以下情况，则中间节点（父节点）应该放摄像头：
    // left == 0 && right == 0 左右节点无覆盖
    // left == 1 && right == 0 左节点有摄像头，右节点无覆盖
    // left == 0 && right == 1 左节点有无覆盖，右节点摄像头
    // left == 0 && right == 2 左节点无覆盖，右节点覆盖
    // left == 2 && right == 0 左节点覆盖，右节点无覆盖
    // 这个不难理解，毕竟有一个孩子没有覆盖，父节点就应该放摄像头。

    // 此时摄像头的数量要加一，并且return 1，代表中间节点放摄像头。
    if (left === 0 || right === 0) {
      // 状态值为 1 摄像头数 ++;
      result++;
      return 1;
    }

    // 情况3：左右节点至少有一个有摄像头
    // 如果是以下情况，其实就是 左右孩子节点有一个有摄像头了，那么其父节点就应该是2（覆盖的状态）
    // left == 1 && right == 2 左节点有摄像头，右节点有覆盖
    // left == 2 && right == 1 左节点有覆盖，右节点有摄像头
    // left == 1 && right == 1 左右节点都有摄像头
    // 左右节点至少存在 1个摄像头,那么本节点就是处于被覆盖状态
    if (left === 1 || right === 1) {
      return 2;
    }

    return -1;
  };

  // 情况4：头结点没有覆盖
  // 对根节点的状态做检验,防止根节点是无覆盖状态
  if (traversal(root) === 0) {
    result++;
  }

  return result;
};
