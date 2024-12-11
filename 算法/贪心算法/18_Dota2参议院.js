/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  let R = true; // R = true表示本轮循环结束后，字符串里依然有R;
  let D = true; // D = true表示本轮循环结束后，字符串里依然有D;
  let flag = 0; // 当flag大于0时，R在D前出现，R可以消灭D。当flag小于0时，D在R前出现，D可以消灭R
  let senateArr = senate.split(""); // 将字符串转换为数组，方便操作

  while (R && D) {
    // 一旦R或者D为false，就结束循环，说明本轮结束后只剩下R或者D了
    R = false; // 每次循环开始时，R和D都为false
    D = false;

    for (let i = 0; i < senateArr.length; i++) {
      // 遍历数组
      if (senateArr[i] === "R") {
        // 如果当前元素是R
        if (flag < 0) {
          // 如果flag小于0，说明前面有D，D可以消灭R，R此时为false
          senateArr[i] = 0;
        } else {
          // 如果flag大于等于0，说明前面有R，R可以消灭D，R此时为true
          R = true;
        }
        flag++; // 每次R出现，flag加1
      }

      if (senateArr[i] === "D") {
        // 如果当前元素是D
        if (flag > 0) {
          // 如果flag大于0，说明前面有R，R可以消灭D，D此时为false
          senateArr[i] = 0;
        } else {
          // 如果flag小于等于0，说明前面有D，D可以消灭R，D此时为true
          D = true;
        }
        flag--; // 每次D出现，flag减1
      }
    }
  }
  return R ? "Radiant" : "Dire"; // 最后返回R或者D，取决于R和D是否为true
};
