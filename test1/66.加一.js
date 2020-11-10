/*
 * @Author: your name
 * @Date: 2020-11-09 17:30:55
 * @LastEditTime: 2020-11-09 17:44:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\66.加一.js
 */
/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  add1(digits, digits.length - 1);
  function add1(arr, index) {
    if (index == -1) {
      arr.unshift(1);
      return;
    }
    arr[index]++;
    if (arr[index] === 10) {
      arr[index] = 0;
      add1(arr, index - 1);
    }
  }
  return digits;
};
// @lc code=end
console.log(plusOne([9]));
