/*
 * @Author: your name
 * @Date: 2020-11-25 15:44:35
 * @LastEditTime: 2020-11-25 16:09:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\409.最长回文串.js
 */
/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let obj = {};
  let res = 0;
  let flag = false;
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (obj[element]) {
      obj[element]++;
    } else {
      obj[element] = 1;
    }
  }
  for (let key in obj) {
    if (obj[key] % 2 == 1) {
      flag = true;
      res += obj[key] - 1;
    } else {
      res += obj[key];
    }
  }
  return res + flag;
};
// @lc code=end
