const { testSort } = require("./utils.js");

function bubbleSort(arr) {
  const n = arr.length; // 获取数组长度

  // 外层for循环：0 ～ n - 1
  for (let i = 0; i < n; i++) {
    let swapped = false; // 增加一个标识，遍历一遍之后，如果前面的数字已经是有序的，就无须再次执行循环，减少交换次数，提高性能
    // 内层for循环：找到最大值
    for (let j = 0; j < n - 1 - i; j++) {
      // j < n - 1 - i：每次遍历都会将最大值放到最后，所以每次遍历的次数都会减少
      if (arr[j] > arr[j + 1]) {
        // 如果前一个数字大于后一个数字，则交换位置
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true; // 交换位置后，将标识设置为true
      }
    }

    if (!swapped) break; // 如果遍历一遍之后，没有发生交换，说明数组已经是有序的，直接跳出循环
  }

  return arr; // 返回排序后的数组
}

const nums = [18, 88, 65, 45, 27, 9, 15];
console.log(bubbleSort(nums));

testSort(bubbleSort);
// measureSort(bubbleSort, 100000);
