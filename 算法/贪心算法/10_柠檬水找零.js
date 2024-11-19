/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let fiveCount = 0; // 5元数量
  let tenCount = 0; // 10元数量

  for (let i = 0; i < bills.length; i++) {
    // 遍历账单
    let bill = bills[i]; // 当前账单

    if (bill === 5) {
      // 当前账单为5元
      fiveCount += 1; // 5元数量加1
    } else if (bill === 10) {
      // 当前账单为10元
      if (fiveCount > 0) {
        // 如果有5元
        fiveCount -= 1; // 5元数量减1
        tenCount += 1; // 10元数量加1
      } else {
        // 如果没有5元
        return false; // 返回false
      }
    } else {
      // 当前账单为20元
      if (tenCount > 0 && fiveCount > 0) {
        // 如果有10元和5元
        tenCount -= 1; // 10元数量减1
        fiveCount -= 1; // 5元数量减1
      } else if (fiveCount >= 3) {
        // 如果有3张5元
        fiveCount -= 3; // 5元数量减3
      } else {
        return false; // 如果没有10元和5元，也没有3张5元，返回false
      }
    }
  }
  return true; // 遍历完账单后，返回true
};
