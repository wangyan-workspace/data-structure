function totalFruit(fruits) {
  let start = 0, // 起始位置
    end = 0, // 结束位置
    len = fruits.length, // 当前数组长度
    maxfruit = 0, // 滑窗内数字个数
    arr = []; // 滑窗内数字集合

  while (end < len) {
    // 处理逻辑内还是存在问题的，晚点看
    let types = new Set(arr);
    console.log("滑窗---", types);

    if (types.size > 2) {
      arr.shift(fruits[start]);
      start++;
    }

    arr.push(fruits[end]);

    if (types.size <= 2) {
      console.log("个数---", end, start, end - start + 1);
      maxfruit = Math.max(maxfruit, end - start + 1);
      end++;
    }
    console.log("arr", arr);
  }
  return maxfruit;
}

console.log(totalFruit([0,1,2]));
