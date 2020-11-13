/*
 * @Author: your name
 * @Date: 2020-11-11 14:16:23
 * @LastEditTime: 2020-11-12 09:48:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\171.excel表列序号.js
 */
/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let res = 0;
  let table = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26
  };
  let j = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    res += table[s[i]] * Math.pow(26, j);
    j++;
  }
  return res;
};
// @lc code=end
console.log(titleToNumber("YZ"));
