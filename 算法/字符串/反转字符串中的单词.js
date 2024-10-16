// 方案一解题思路如下：
// 1、移除多余空格
// 2、将整个字符串转数组后，反转单词
// 3、将反转后的数组转字符串
// 4、返回结果

// 举个例子，源字符串为："    the    sky  is  blue   "
// 移除多余空格 : "the sky is blue"
// 字符串转数组后反转：[ 'the', 'sky', 'is', 'blue' ] =》 [ 'blue', 'is', 'sky', 'the' ] =》 "blue is sky the"
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return reverse(removeExtraSpaces(s), 0);
};

// 删除多余空格
function removeExtraSpaces(str) {
  let strArr = str.split("");
  let left = 0;
  let right = strArr.length - 1;

  // 去除字符串开头的空格
  while (strArr[left] === " ") {
    left++;
  }

  // 去除字符串结尾的空格
  while (strArr[right] === " ") {
    right--;
  }
  let res = [];
  while (left <= right) {
    let cur = strArr[left];
    // 去除中间多余的空格
    if (cur === " " && res[res.length - 1] === " ") {
      left++;
      continue;
    }
    res.push(cur);
    left++;
  }
  return res.join("");
}

// 将字符串转数组后反转
function reverse(str, start) {
  let strArr = str.split(" ");
  let left = start;
  let right = strArr.length - 1;

  while (left < right) {
    [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
    left++;
    right--;
  }
  return strArr.join(" ");
}

const str = "    the    sky  is  blue   ";
console.log(reverse(removeExtraSpaces(str), 0));
