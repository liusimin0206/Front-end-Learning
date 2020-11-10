/*
 * @Author: your name
 * @Date: 2020-11-10 10:22:46
 * @LastEditTime: 2020-11-10 10:23:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\342.4-的幂.js
 */
/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  if (num <= 0) {
    return false;
  }
  let flag = true;
  while (num > 1) {
    let temp = num >> 2;
    if (temp << 2 !== num) {
      flag = false;
      break;
    } else {
      num = temp;
    }
  }
  return flag;
};
// @lc code=end
