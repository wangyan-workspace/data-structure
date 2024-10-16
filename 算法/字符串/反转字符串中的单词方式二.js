// 方案二解题思路如下：

// 移除多余空格
// 将整个字符串反转
// 将每个单词反转
// 举个例子，源字符串为："the sky is blue "

// 移除多余空格 : "the sky is blue"
// 字符串反转："eulb si yks eht"
// 单词反转："blue is sky the"

// 方案二解题代码如下：
var reverseWords = function (s) {
  // 字符串转数组
  const strArr = Array.from(s);
  // 移除多余空格
  removeExtraSpaces(strArr);
  // 将整个字符串反转
  reverse(strArr, 0, strArr.length - 1);
  // 将每个单词反转
  let start = 0;
  for (let i = 0; i <= strArr.length; i++) {
    if (strArr[i] === " " || i === strArr.length) {
      // 翻转单词
      reverse(strArr, start, i - 1);
      start = i + 1;
    }
  }

  return strArr.join(""); // 数组转字符串
};

// 删除多余空格
function removeExtraSpaces(strArr) {
  let fast = 0;
  let slow = 0;
  while (fast < strArr.length) {
    // 移除前面、中间重复的空格
    if (strArr[fast] === " " && (fast === 0 || strArr[fast - 1] === " ")) {
      fast++;
    } else {
      strArr[slow++] = strArr[fast++];
    }
  }

  // 移除后面多余的空格
  strArr.length = strArr[slow - 1] === " " ? slow - 1 : slow;
}

// 将字符串反转
function reverse(strArr, start, end) {
  let left = start;
  let right = end;

  while (left < right) {
    [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
    left++;
    right--;
  }
}
const str = "    the    sky  is  blue   ";
reverseWords(str);

// 时间复杂度: O(n)
// 空间复杂度: O(1) 或 O(n)，取决于语言中字符串是否可变
