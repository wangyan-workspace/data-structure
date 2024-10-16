/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) { // 在原始字符串的基础上反转字符串(双指针法)
  let left = 0; // 左指针
  let right = s.length - 1; // 右指针

  while (left < right) { // 左指针小于右指针时
    [s[left], s[right]] = [s[right], s[left]]; // 交换左右指针的值
    left++; // 左指针右移
    right--; // 右指针左移
  }
};

// 时间复杂度: O(n)
// 空间复杂度: O(1)

