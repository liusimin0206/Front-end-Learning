/*
 * @Author: your name
 * @Date: 2020-11-11 10:43:10
 * @LastEditTime: 2020-11-11 11:02:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\374.猜数字大小.js
 */
/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  let right = n;
  let left = 1;
  let num;
  while (right >= left) {
    num = Math.floor((right + left) / 2);
    if (guess(num) === -1) {
      right = num - 1;
      continue;
    }
    if (guess(num) === 1) {
      left = num + 1;
      continue;
    }
    if (guess(num) === 0) {
      return num;
    }
  }
};
// @lc code=end
