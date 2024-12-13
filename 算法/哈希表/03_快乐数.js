/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let m = new Map(); // 记录n是否出现过

  const getSum = () => {
    // 获取n的各位平方和
    let sum = 0; // n的各位平方和
    while (n) {
      // n不为0
      sum += (n % 10) ** 2; // n的个位平方和
      n = Math.floor(n / 10); // n去掉个位,即n除以10取整
    }
    return sum; // 返回n的各位平方和
  };

  while (true) {
    // n出现过，证明已陷入无限循环
    if (m.has(n)) return false;
    if (n === 1) return true; // n为1，证明是快乐数
    m.set(n, 1); // 记录n是否出现过,出现过为1
    n = getSum(n); // 获取n的各位平方和
  }
};
