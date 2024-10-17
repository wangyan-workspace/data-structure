/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b); // 升序排序
  const resArr = []; // 结果数组
  const len = nums.length; // 数组长度

  for (let i = 0; i < len; i++) {
    // 遍历数组
    if (nums[i] > 0) {
      return resArr; //nums经过排序后，只要nums[i]>0, 此后的nums[i] + nums[left] + nums[right]均大于0,可以提前终止循环。
    }

    // 去重 “a”
    if (nums[i] === nums[i - 1]) {
      // 如果当前元素和前一个元素相同，则跳过
      continue;
    }

    let left = i + 1; // 左指针
    let right = len - 1; // 右指针

    while (left < right) {
      // 左指针小于右指针执行逻辑
      let total = nums[i] + nums[left] + nums[right]; // 计算总和

      if (total > 0) {
        // 如果总和大于0，右指针左移
        right--;
      } else if (total < 0) {
        // 如果总和小于0，左指针右移
        left++;
      } else {
        resArr.push([nums[i], nums[left], nums[right]]); // 如果总和等于0，将结果存入结果数组
        left++; // 左指针右移
        right--; // 右指针左移

        while (nums[left] === nums[left - 1]) {
          // 去重 “b”
          left++;
        }

        while (nums[right] === nums[right + 1]) {
          // 去重 “c”
          right--;
        }
      }
    }
  }
  return resArr;
};
