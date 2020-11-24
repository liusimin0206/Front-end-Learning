/*
 * @Author: your name
 * @Date: 2020-11-24 16:52:55
 * @LastEditTime: 2020-11-24 17:06:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\551.学生出勤记录-i.js
 */
/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  let acount = 0;
  let lcount = 0;
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (item == "A") {
      acount++;
    }
    if (item == "L") {
      lcount++;
    } else {
      lcount = 0;
    }
    if (acount > 1 || lcount > 2) {
      return false;
    }
  }
  return true;
};
// @lc code=end
