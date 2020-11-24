/*
 * @Author: your name
 * @Date: 2020-11-24 10:16:48
 * @LastEditTime: 2020-11-24 10:32:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\222.完全二叉树的节点个数.js
 */
/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
  if (root == null) {
    return 0;
  }
  return JSON.stringify(root).match(/val/g).length;
};
// @lc code=end
