/*
 * @Author: your name
 * @Date: 2020-11-19 14:24:27
 * @LastEditTime: 2020-11-19 14:36:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\167.两数之和-ii-输入有序数组.js
 */
/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let j = numbers.length - 1;
  for (let i = 0; i < numbers.length; i++) {
    while (numbers[i] + numbers[j] > target) {
      j--;
    }
    if (numbers[i] + numbers[j] == target) {
      return [i + 1, j + 1];
    }
  }
  return [0, 0];
};
// @lc code=end
