/*
 * @Author: your name
 * @Date: 2020-11-10 10:53:45
 * @LastEditTime: 2020-11-10 11:52:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\31.下一个排列.js
 */
/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 从个位数开始往前调，插入排序
 */
var nextPermutation = function(nums) {
  if (nums.length <= 1) {
    return;
  }
  function exchange(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  let flag = false;
  for (let i = nums.length - 2; i >= 0; i--) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        exchange(nums, i, j);
        flag = true;
        break;
      }
    }

    if (flag == true) {
      break;
    } else {
      nums.push(nums.splice(i, 1));
    }
  }
};
// @lc code=end
