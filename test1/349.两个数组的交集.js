/*
 * @Author: your name
 * @Date: 2020-11-02 13:58:04
 * @LastEditTime: 2020-11-02 14:13:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\349.两个数组的交集.js
 */
/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let res = new Set();
  let temp = {};
  nums1.forEach(item => {
    temp[item] = 1;
  });
  nums2.forEach(item => {
    if (temp[item] === 1) {
      res.add(item);
    }
  });
  return [...res];
};
// @lc code=end
