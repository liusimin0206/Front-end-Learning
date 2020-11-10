/*
 * @Author: your name
 * @Date: 2020-11-09 17:13:39
 * @LastEditTime: 2020-11-09 17:29:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\58.最后一个单词的长度.js
 */
/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let end = s.length - 1;
  while (end >= 0 && s[end] == " ") end--;
  if (end < 0) return 0;
  let start = end;
  while (start >= 0 && s[start] != " ") start--;
  return end - start;
};
// @lc code=end
console.log(lengthOfLastWord("Hello World"));
