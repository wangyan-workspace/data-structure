function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

function testSort(sortFn) {
  let nums = Array.from({ length: 10 }, () => {
    return Math.floor(Math.random() * 200);
  });

  console.log("排序前的原数组", nums);
  const newNums = sortFn(nums);
  console.log("排序后的新数组", newNums);
  console.log("排序后是否有正确的顺序？", isSorted(newNums));
}

module.exports = {
  isSorted,
  testSort,
}
