/*
 * @Author: your name
 * @Date: 2020-11-12 10:27:36
 * @LastEditTime: 2020-11-12 10:51:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\290.单词规律.js
 */
/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  let map1 = {};
  let map2 = {};
  let sArr = s.split(/ +/);
  if (sArr[0] == "") {
    sArr.shift();
  }
  if (sArr[sArr.length - 1] == "") {
    sArr.pop();
  }
  if (pattern.length !== sArr.length) {
    return false;
  }
  for (let i = 0; i < pattern.length; i++) {
    let tempchat = pattern[i];
    if (map1.hasOwnProperty(tempchat) || map2.hasOwnProperty(sArr[i])) {
      if (map1[tempchat] != sArr[i]) {
        return false;
      }
      if (map2[sArr[i]] != tempchat) {
        return false;
      }
    } else {
      map2[sArr[i]] = tempchat;
      map1[tempchat] = sArr[i];
    }
  }
  return true;
};
// @lc code=end
console.log(wordPattern("abc", "dog cat dog"));
