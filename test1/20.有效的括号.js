/*
 * @Author: your name
 * @Date: 2020-11-02 14:23:18
 * @LastEditTime: 2020-11-02 15:59:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\20.有效的括号.js
 */
/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  while (s.match(/\{}/) || s.match(/\[]/) || s.match(/\(\)/)) {
    s = s.replace(/\{}/, "");
    s = s.replace(/\[]/, "");
    s = s.replace(/\(\)/, "");
  }
  return s == "";
};
// @lc code=end
console.log(isValid(")"));
