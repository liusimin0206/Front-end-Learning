/*
 * @Author: your name
 * @Date: 2020-11-11 10:33:46
 * @LastEditTime: 2020-11-11 10:41:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\263.丑数.js
 */
/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (num <= 0 || num != Math.floor(num)) {
    return false;
  }
  while (num !== 1) {
    if (num % 2 == 0) {
      num = num / 2;
    } else break;
  }
  while (num !== 1) {
    if (num % 3 == 0) {
      num = num / 3;
    } else break;
  }
  while (num !== 1) {
    if (num % 5 == 0) {
      num = num / 5;
    } else break;
  }
  return num === 1 ? true : false;
};
// @lc code=end
isUgly(6);
