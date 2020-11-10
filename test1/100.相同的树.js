/*
 * @Author: your name
 * @Date: 2020-11-10 09:59:52
 * @LastEditTime: 2020-11-10 10:04:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \test1\100.相同的树.js
 */
/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  return JSON.stringify(p) === JSON.stringify(q);
};
// @lc code=end
