function insertionSort(arr) {
  const n = arr.length; // 数组长度

  for (let i = 1; i < n; i++) {
    // 从第二个元素开始，依次和前面的元素比较
    let newNum = arr[i]; // 当前元素
    let j = i - 1; // 当前元素的前一个元素的索引

    while (arr[j] > newNum && j >= 0) {
      // 当前元素小于前一个元素，则前一个元素后移
      arr[j + 1] = arr[j]; // 前一个元素后移
      j--; // 前一个元素的索引减1
    }
    arr[j + 1] = newNum; // 将当前元素插入到正确的位置
  }

  return arr; // 返回排序后的数组
}

const nums = [18, 88, 65, 45, 27, 9, 15];
console.log(insertionSort(nums));
