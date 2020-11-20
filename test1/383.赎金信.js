/*
 * @Author: your name
 * @Date: 2020-11-20 10:44:40
 * @LastEditTime: 2020-11-20 11:19:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\383.赎金信.js
 */
/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  for (let i = 0; i < ransomNote.length; i++) {
    const item = ransomNote[i];
    let reg = new RegExp(item);
    if (reg.test(magazine)) {
      magazine = magazine.replace(reg, "");
    } else {
      return false;
    }
  }
  return true;
};
// @lc code=end
console.log(canConstruct("aa", "ab"));
