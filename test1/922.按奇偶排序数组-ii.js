/*
 * @Author: your name
 * @Date: 2020-11-12 11:20:25
 * @LastEditTime: 2020-11-12 11:29:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\922.按奇偶排序数组-ii.js
 */
/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let odd = 1,
    even = 0,
    len = A.length;
  function exchange(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  while (true) {
    while (true) {
      if (A[even] % 2 == 1) {
        break;
      }
      if (even >= len) {
        return A;
      }
      even += 2;
    }
    while (true) {
      if (A[odd] % 2 == 0) {
        break;
      }
      if (odd >= len) {
        return A;
      }
      odd += 2;
    }
    exchange(A, odd, even);
    odd += 2;
    even += 2;
    if (odd >= len || even >= len) {
      return A;
    }
  }
};
// @lc code=end
