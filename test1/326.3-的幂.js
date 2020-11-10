/*
 * @Author: your name
 * @Date: 2020-11-10 10:25:43
 * @LastEditTime: 2020-11-10 10:31:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\326.3-的幂.js
 */
/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n <= 0) {
    return false;
  }
  let flag = true;
  while (n > 1) {
    let temp = Math.floor(n / 3);
    if (temp * 3 !== n) {
      flag = false;
      break;
    } else {
      n = temp;
    }
  }
  return flag;
};
// @lc code=end
console.log(isPowerOfThree(45));
