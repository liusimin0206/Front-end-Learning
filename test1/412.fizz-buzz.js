/*
 * @Author: your name
 * @Date: 2020-11-10 10:35:15
 * @LastEditTime: 2020-11-10 10:47:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\412.fizz-buzz.js
 */
/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let n3 = 0;
  let n5 = 0;
  let res = [];
  for (let i = 1; i <= n; i++) {
    n3 = ++n3 % 3;
    n5 = ++n5 % 5;
    if (n5 == 0 && n3 == 0) {
      res.push("FizzBuzz");
      continue;
    }
    if (n5 == 0) {
      res.push("Buzz");
      continue;
    }
    if (n3 == 0) {
      res.push("Fizz");
      continue;
    }
    res.push("" + i);
  }
  return res;
};
// @lc code=end
