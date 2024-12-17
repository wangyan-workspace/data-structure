function qucikSort(arr) {
  function partition(left, right) {
    // 分割函数
    if (left >= right) return; // 递归终止条件，当left大于等于right时，说明已经分割完成
    let pivotValue = right; // 选择最后一个元素作为基准值
    let i = left; // 左指针
    let j = right - 1; // 右指针

    while (i <= j) {
      // 当左指针小于等于右指针时，继续循环
      while (arr[i] < arr[pivotValue]) {
        // 如果左指针指向的元素小于基准值，左指针右移
        i++;
      }

      while (arr[j] > arr[pivotValue]) {
        // 如果右指针指向的元素大于基准值，右指针左移
        j--;
      }

      if (i <= j) {
        // 如果左指针小于等于右指针，交换左右指针指向的元素
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++; // 左指针右移
        j--; // 右指针左移
      }
    }
    [arr[i], arr[pivotValue]] = [arr[pivotValue], arr[i]]; // 将基准值放到正确的位置上
    partition(left, j); // 递归分割左子数组
    partition(i + 1, right); // 递归分割右子数组
  }
  partition(0, arr.length - 1); // 调用分割函数，从数组的第一个元素到倒数第二个元素进行分割
  return arr; // 返回排序后的数组
}

const nums = [18, 88, 65, 45, 27, 9, 15];
console.log(qucikSort(nums));
