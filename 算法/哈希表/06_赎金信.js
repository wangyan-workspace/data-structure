/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let strArray = new Array(26).fill(0); // 生成一个长度为26的数组，用于存放字母出现的次数
  const base = "a".charCodeAt(); // 获取a的Unicode编码

  for (let s of magazine) {
    // 遍历magazine中的每一个字母
    strArray[s.charCodeAt() - base]++; // 将字母的Unicode编码减去a的Unicode编码，得到该字母在数组中的位置，并将该位置的值加1
  }

  for (let s of ransomNote) {
    // 遍历ransomNote中的每一个字母
    let index = s.charCodeAt() - base; // 将字母的Unicode编码减去a的Unicode编码，得到该字母在数组中的位置

    if (!strArray[index]) return false; // 如果该位置的值为0，说明该字母在magazine中不存在，返回false
    strArray[index]--; // 否则将该位置的值减1
  }
  return true; // 遍历完ransomNote中的所有字母后，如果所有字母在magazine中都存在，则返回true
};
