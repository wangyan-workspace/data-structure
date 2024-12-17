function mergeSort(arr) {
  if (arr.length <= 1) return arr; // 递归终止条件，当数组长度为1时，直接返回

  // 1、分解：对数组进行分解，拆分成多个子数组
  // 1.1、切割数组，计算中间位置
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);

  // 1.2、 递归切割leftArr和rightArr，对每个子数组进行归并排序
  // 左边的数组排好序
  const newLeftArr = mergeSort(leftArr);
  // 右边的数组排好序
  const newRightArr = mergeSort(rightArr);

  // 将排好序的数组进行合并操作
  // 合并，将两个子数组进行合并（双指针）
  let newArr = [];
  let i = 0; // 左边子数组指针
  let j = 0; // 右边子数组指针

  // 比较左右哪一个更小，那么先放哪一个位置的元素
  while (i < newLeftArr.length && j < newRightArr.length) {
    if (newLeftArr[i] <= newRightArr[j]) {
      // 左边更小
      newArr.push(newLeftArr[i]); // 将左边元素放入新数组中
      i++; // 左边指针后移
    } else {
      // 右边更小
      newArr.push(newRightArr[j]); // 将右边元素放入新数组中
      j++; // 右边指针后移
    }
  }

  // 考虑左边或者右边有剩余，直接加入到数组中
  // 左边有剩余
  if (i < newLeftArr.length) {
    newArr.push(...newLeftArr.slice(i));
  }

  // 右边有剩余
  if (j < newRightArr.length) {
    newArr.push(...newRightArr.slice(j));
  }

  return newArr; // 返回合并后的新数组
}

const nums = [18, 88, 65, 45, 27, 9, 15];
console.log(mergeSort(nums));
