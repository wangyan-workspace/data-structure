/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
  n = n.toString().split("").map(Number); // 转化为数组

  let flag = Infinity; // 标记从哪一位开始，后面的数字都变成9

  for (let i = n.length - 1; i > 0; i--) {
    // 从后往前遍历
    if (n[i - 1] > n[i]) {
      // 如果前一位大于后一位，则前一位减1，后一位变成9
      flag = i; // 标记从哪一位开始，后面的数字都变成9
      n[i - 1] = n[i - 1] - 1; // 前一位减1
      n[i] = 9; // 后一位变成9
    }
  }

  for (let i = flag; i < n.length; i++) {
    // 从标记的位置开始，后面的数字都变成9
    n[i] = 9;
  }

  console.log(n); // [ 2, 9, 9 ]

  return +n.join(""); // 转化为数字
};
const number = monotoneIncreasingDigits(332);
console.log("number", number); // number 299
