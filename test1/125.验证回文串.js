/*
 * @Author: your name
 * @Date: 2020-11-10 09:46:17
 * @LastEditTime: 2020-11-10 10:16:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\125.验证回文串.js
 */
/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase();
  let reg = /[a-zA-Z0-9]/g;
  let sArr = s.match(reg);
  if (sArr === null) {
    return true;
  }
  let left = 0;
  let right = sArr.length - 1;

  while (left <= right) {
    if (sArr[left] !== sArr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
// @lc code=end
