/*
 * @Author: your name
 * @Date: 2020-11-20 11:49:05
 * @LastEditTime: 2020-11-20 12:05:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\387.字符串中的第一个唯一字符.js
 */
/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let boxes = [{}, {}];
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (boxes[0][item] != undefined) {
      boxes[0][item] = undefined;
      boxes[1][item] = i;
      continue;
    } else if (boxes[1][item] == undefined) {
      boxes[0][item] = i;
    }
  }
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (boxes[0][item] != undefined) {
      return boxes[0][item];
    }
  }
  return -1;
};
// @lc code=end
console.log(firstUniqChar("eee"));
