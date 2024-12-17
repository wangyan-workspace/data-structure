function selectionSort(arr) {
  let n = arr.length; // 获取数组长度

  // 外层循环的作用：经过多少轮找最小值
  for (let i = 0; i < n - 1; i++) {
    // n-1轮，因为最后一个元素不需要找，它就是最大的
    let minIndex = i; // 假设当前元素是最小的
    // 内层循环作用：找到最小值对应的索引，并保存
    for (let j = i + 1; j < n; j++) {
      // 从i+1开始，因为i位置的元素已经假设是最小的了
      if (arr[j] < arr[minIndex]) {
        // 如果当前元素比假设的最小值还小
        minIndex = j; // 更新最小值对应的索引
      }
    }

    if (i !== minIndex) {
      // 如果最小值不是假设的最小值，则交换
      // 优化，只有不相等时才需要交换，减少交换次数
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // 交换两个元素
    }
  }
  return arr; // 返回排序后的数组
}

const nums = [18, 88, 65, 45, 27, 9, 15];
console.log(selectionSort(nums));
