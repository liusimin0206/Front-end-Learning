/*
 * @Author: your name
 * @Date: 2020-11-03 09:43:09
 * @LastEditTime: 2020-11-03 10:17:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\941.有效的山脉数组.js
 */
/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  const len = A.length;
  let cha0 = undefined;
  if (len < 3) {
    return false;
  }
  let flag = 0;
  for (let i = 1; i < len; i++) {
    let cha = A[i] - A[i - 1];
    if (i == 1) {
      if (cha <= 0) return false;
      else cha0 = cha;
    }
    if (cha === 0) {
      return false;
    }
    if (cha0 * cha < 0) {
      flag++;
    }

    cha0 = cha;
  }
  return flag === 1;
};
// @lc code=end
