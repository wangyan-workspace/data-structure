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
 * @return {number[]}
 */
// 使用额外空间map的方法
var findMode = function (root) {
  // 使用递归中序遍历
  let map = new Map(); // 存放每个数字出现的次数
  // 1. 确定递归函数以及函数参数
  const travelTree = (root) => {
    // 2. 确定递归终止条件
    if (root === null) return;

    travelTree(root.left); // 递归左子树
    // 3. 单层递归逻辑
    map.set(root.val, map.has(root.val) ? map.get(root.val) + 1 : 1); // 计算每个数字出现的次数
    travelTree(root.right); // 递归右子树
  };
  travelTree(root); // 调用递归函数
  //上面把数据都存储到map
  //下面开始寻找map里面的众数
  // 定义一个最大出现次数的初始值为root.val的出现次数
  let maxCount = map.get(root.val);
  // 定义一个存放结果的数组res
  let res = [];
  for (let [key, value] of map) {
    // 如果当前值出现次数等于最大出现次数就直接在res增加该值
    if (value === maxCount) {
      res.push(key);
    }
    // 如果value的值大于原本的maxCount就清空res的所有值，因为找到了更大的众数次数
    if (value > maxCount) {
      res = [];
      maxCount = value;
      res.push(key);
    }
  }
  return res; // 返回结果
};

// 不使用额外空间，利用二叉树性质，中序遍历(有序)：
var findMode = function (root) {
  // 不使用额外空间，使用中序遍历,设置出现最大次数初始值为1
  let count = 0, // 当前数字出现的次数
    maxCount = 1; // 出现最大次数
  let pre = root, // 前一个节点
    res = []; // 存放结果
  // 1.确定递归函数及函数参数
  const travelTree = (cur) => {
    if (cur === null) return;
    travelTree(cur.left); // 递归左子树
    // 3. 单层递归逻辑
    if (pre.val === cur.val) {
      // 如果前一个节点和当前节点值相等，那么count++
      count++;
    } else {
      count = 1; // 如果前一个节点和当前节点值不相等，那么count重置为1
    }
    pre = cur; // 更新前一个节点
    if (count === maxCount) {
      // 如果当前数字出现的次数等于最大出现次数，那么在res增加该值
      res.push(cur.val);
    }
    if (count > maxCount) {
      // 如果当前数字出现的次数大于最大出现次数，那么清空res的所有值，因为找到了更大的众数次数
      res = [];
      maxCount = count;
      res.push(cur.val);
    }
    travelTree(cur.right); // 递归右子树
  };
  travelTree(root); // 调用递归函数
  return res; // 返回结果
};
