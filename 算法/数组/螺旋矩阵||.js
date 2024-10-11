/*
 * @Author: wangyan-workspace 2107014530@qq.com
 * @Date: 2024-10-11 17:29:22
 * @LastEditors: wangyan-workspace 2107014530@qq.com
 * @LastEditTime: 2024-10-11 19:08:01
 * @FilePath: /data-structure/算法/数组/螺旋矩阵||.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
// 适用于n行n列的矩阵，填充顺序为从左到右，从上到下，从右到左，从下到上，依次循环
var generateMatrix = function (n) {
  let startX = 0; // 起始位置
  let startY = 0; // 起始位置
  let loop = Math.floor(n / 2); // 循环次数(需要循环几次/圈)
  let mid = Math.floor(n / 2); // 中间位置
  let count = 1; // 计数(更新填充数字)
  let offset = 1; // 控制每一圈里每一条边遍历的长度
  let res = new Array(n).fill(0).map(() => new Array(n).fill(0)); // 初始化结果数组(n行n列的二维数组)

  while (loop--) {
    // 每一圈循环开始的起点
    let row = startX,
      col = startY;

    // 上行从左到右(左闭右开)(行不变，列+1)
    for (; col < n - offset; col++) {
      res[row][col] = count++;
      // 等同于
      // res[row][col] = count;
      // count++;
    }

    // 右列从上到下(左闭右开)(列不变，行+1)
    for (; row < n - offset; row++) {
      res[row][col] = count++;
    }

    // 下行从右到左(左闭右开)(行不变，列-1)
    for (; col > startX; col--) {
      res[row][col] = count++;
    }

    // 左列从下到上(左闭右开)(列不变，行-1)
    for (; row > startY; row--) {
      res[row][col] = count++;
    }

    // 更新起始位置
    startX++;
    startY++;

    // 更新offset
    offset++;
  }

  // 如果n为奇数的话，需要单独给矩阵最中间的位置赋值
  if (n % 2 === 1) {
    res[mid][mid] = count;
  }

  return res;
};

/**
 * @param {number[][]} array
 * @return {number[]}
 */
// 适用于n行n列的矩阵，顺时针提取每一项的值
var spiralArray = function (array) {
  let startX = 0; // 起始位置
  let startY = 0; // 起始位置
  let n = array.length; // 数组长度
  let loop = Math.floor(n / 2); // 循环次数(需要循环几次/圈)
  let mid = Math.floor(n / 2); // 中间位置
  let offset = 1; // 控制每一圈里每一条边遍历的长度
  let res = []; // 结果数组

  while (loop--) {
    // 每一圈循环开始的起点
    let row = startX,
      col = startY;

    // 上行从左到右(左闭右开)(行不变，列+1)
    for (; col < n - offset; col++) {
      res.push(array[row][col]);
    }

    // 右列从上到下(左闭右开)(列不变，行+1)
    for (; row < n - offset; row++) {
      res.push(array[row][col]);
    }

    // 下行从右到左(左闭右开)(行不变，列-1)
    for (; col > startX; col--) {
      res.push(array[row][col]);
    }

    // 左列从下到上(左闭右开)(列不变，行-1)
    for (; row > startY; row--) {
      res.push(array[row][col]);
    }

    // 更新起始位置
    startX++;
    startY++;

    // 更新offset
    offset++;
  }

  // 如果n为奇数的话，需要单独给矩阵最中间的位置赋值
  if (n % 2 === 1) {
    res.push(array[mid][mid]);
  }

  return res;
};

// 时间复杂度 O(n^2): 模拟遍历二维矩阵的时间
// 空间复杂度 O(1)


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// 适用于m行n列的矩阵，顺时针提取每一项的值
var spiralOrder = function (matrix) {
  if (!matrix.length) return []; // 如果矩阵为空，直接返回空数组
  let m = matrix.length, // 行数
    n = matrix[0].length; // 列数
  let left = 0, // 左边界
    right = n - 1, // 右边界
    top = 0, // 上边界
    bottom = m - 1; // 下边界
  let result = []; // 结果数组

  while (true) {
    // 从左到右
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]); // 将上边界的元素加入结果数组
    }
    top++; // 上边界下移
    if (top > bottom) break; // 如果上边界大于下边界，说明已经遍历完了

    // 从上到下
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]); // 将右边界的元素加入结果数组
    }
    right--; // 右边界左移
    if (left > right) break; // 如果左边界大于右边界，说明已经遍历完了

    // 从右到左
    for (let i = right; i >= left; i--) {
      result.push(matrix[bottom][i]); // 将下边界的元素加入结果数组
    }
    bottom--; // 下边界上移
    if (top > bottom) break; // 如果上边界大于下边界，说明已经遍历完了

    // 从下到上
    for (let i = bottom; i >= top; i--) {
      result.push(matrix[i][left]); // 将左边界的元素加入结果数组
    }
    left++; // 左边界右移
    if (left > right) break; // 如果左边界大于右边界，说明已经遍历完了
  }

  return result;
};

// 示例使用
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(spiralOrder(matrix)); // 输出: [1, 2, 3, 6, 9, 8, 7, 4, 5]

// 时间复杂度 O(m*n): 模拟遍历二维矩阵的时间
// 空间复杂度 O(1)

