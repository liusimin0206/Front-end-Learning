/*
 * @Author: liusimin
 * @Date: 2020-11-30 17:50:02
 * @LastEditors: your name
 * @LastEditTime: 2020-11-30 17:59:46
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=65 lang=javascript
 *
 * [65] 有效数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  if (isNaN(parseFloat(s))) return false;
  return !isNaN(Number(s));
};
// @lc code=end
console.log(isNumber("   "));
