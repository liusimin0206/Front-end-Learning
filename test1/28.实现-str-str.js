/*
 * @Author: your name
 * @Date: 2020-11-03 15:36:20
 * @LastEditTime: 2020-11-03 15:38:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\28.实现-str-str.js
 */
/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle);
};
// @lc code=end
console.log(strStr("hello", ""));
