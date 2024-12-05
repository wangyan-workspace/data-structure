/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let slow = 0; //慢指针

  for (let fast = 0; fast < nums.length; fast++) {
    //快指针
    if (nums[fast] !== 0) {
      //找到非0的元素
      nums[slow] = nums[fast]; //把非0的元素赋值给数组慢指针指向的索引处的值
      slow++; //慢指针向右移动
    }
  }
  // 后面的元素全变成 0
  for (let j = slow; j < nums.length; j++) {
    nums[j] = 0;
  }
};
