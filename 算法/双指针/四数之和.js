/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const len = nums.length; // 数组长度
  if (len < 4) return []; // 数组长度小于4，直接返回空数组
  nums.sort((a, b) => a - b); // 对数组进行排序
  const resArr = []; // 结果数组

  for (let i = 0; i < len - 3; i++) { // 外层循环
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 去重(第一个数字)

    for (let j = i + 1; j < len - 2; j++) {  // 中层循环
      if (j > i + 1 && nums[j] === nums[j - 1]) continue; // 去重(第二个数字)
      let left = j + 1; // 左指针
      let right = len - 1; // 右指针

      while (left < right) { // 内层循环
        let sum = nums[i] + nums[j] + nums[left] + nums[right]; // 计算和

        if (sum > target) { // 如果和大于目标值，右指针左移
          right--; 
        } else if (sum < target) { // 如果和小于目标值，左指针右移
          left++;
        } else { // 如果和等于目标值，将结果存入结果数组，同时左指针右移，右指针左移
          resArr.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;

          while (nums[left] === nums[left - 1]) { // 去重(第三个数字)
            left++;
          }
          while (nums[right] === nums[right + 1]) { // 去重(第四个数字)
            right--;
          }
        }
      }
    }
  }

  return resArr;
};

// 时间复杂度: O(n^3)
// 空间复杂度: O(1)
